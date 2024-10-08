import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, Observable, Subject } from 'rxjs';
import { GameDto, AccessResultDto, UserDto } from '../shared/model/game';
import { GameRestApiService } from './dataAccess/gameRestApi.service';
import { ROUTER_CONFIGURATION } from '@angular/router';
import { SignalRService, ClientMessage } from './signal-r.service';
import { AlertService } from './alert.service';
import { GuidService } from './guid.service';

@Injectable({
  providedIn: 'root'
})
export class DataCacheService implements OnDestroy {

  // whether initial data has been taken from API
  private static isInitialised = false;

  // All the games in the system
  public games$: BehaviorSubject<GameDto[]> = new BehaviorSubject<GameDto[]>([]);


  // The last result of inputting an access code.
  public lastAccessResult: AccessResultDto; 

  // The client ID that should match the token for a valid authentication
  public clientId: string = '';


  // Currently logged on user id
  public userId: string;

  public users$: BehaviorSubject<UserDto[]> = new BehaviorSubject<UserDto[]>([]);
  public currentUser$: Subject<UserDto> = new Subject<UserDto>();


  // Incoming client messages, for this client
  clientMessages$: Subject<ClientMessage> = new Subject();

  // For storing the subscription so that they can be cleaned up.
  private subscriptions = new Subscription();

 // private readonly _signalRService: SignalRService;

 // private readonly _signalRTest: SignalRTest;

  constructor(private srvGameApi: GameRestApiService,
    private signalRService: SignalRService,    
    private alertService: AlertService, private srvGuid: GuidService) {  
  
    //  this._signalRService = signalRService;
  }


  /** Use this before calling any signal R relevant code. */
  public EnsureInitialize(): Promise<boolean> {

    if (DataCacheService.isInitialised) {
      return Promise.resolve(true);
    }

    DataCacheService.isInitialised = true; 

    const promise = new Promise<any>((resolve:any, reject:any): any => {
      console.log('before test');  
      this.signalRService.init().then((res) => {
        
        this.signalRService.allClientMessages$.subscribe(cm => {
          this.processAllClientMessage(cm);      
        });
    
        this.subscriptions.add(
          this.srvGameApi.generateNewAccessCodeResult$.subscribe(
            data => {
              this.askServerForNewAccessCodeResult$.next(data);
          })
        );      

        resolve(true);
      }); 

    });

    this.refreshStations();
    this.refreshUsers();

    return promise;
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public generateNewClientId(): void {
    this.clientId = this.srvGuid.newGuidAsString();
  }

  
  /** Get game details/status. */
  public getGameDetails(gameId: string): Promise<GameDto> {
    const promise = new Promise<any>((resolve:any, reject:any): any => {
      this.srvGameApi.getStations().subscribe(games => {
        const g = games.find(x => x.id === gameId);
        if(g !== undefined) {
          resolve(g);
        } else {
          reject();
        }
      })
    });
    return promise;
  }


  /** checks whther the inputCode matches the one just generated by the game.
   * Resolves true for matching code, false for not matching. Never rejects.
   */
  public checkAccessCode(gameId: string, inputCode: string): Promise<boolean> {
    const promise = new Promise<any>((resolve:any, reject:any): any => {

      this.srvGameApi.checkAccessCode(gameId, this.clientId, inputCode).subscribe((data: AccessResultDto) => {
         // this.accessResult$.next(data);
          this.lastAccessResult = data;
          resolve(true);
        },
        err => {
          console.log(err);     
          let dto = new AccessResultDto();
          dto.success = false;
       //   this.accessResult$.next(dto);
          this.lastAccessResult = dto; 
          resolve(false);         
        }
      )

    });
    return promise;
  }



  /** */
  public refreshStations(): void {
    this.subscriptions.add(
      this.srvGameApi.getStations().subscribe(
        data => {
          this.games$.next(data);
      })
    );
  }


  public refreshUsers(): void {
    /* todo 
    this.subscriptions.add(
      this.srvGame.getUsers().subscribe(
        data => {
          this.users$.next(data);
      })
    );*/
  }




  
  public hasValidGameToken(gameId): Boolean {
    if( this.lastAccessResult === undefined) {
      return false;
    }

    if(this.lastAccessResult.gameId !== gameId) {
      return false;
    }

    return this.lastAccessResult.success;
  }

  public sendCommandToGame(gameId, command: string, parameters: string) {
    if(!this.hasValidGameToken(gameId)) {
      return;
    }

    console.log(command);
    this.srvGameApi.passCommandToStation(gameId, this.clientId, this.lastAccessResult.token, command, parameters);

  }


  public askServerForNewAccessCodeResult$: Subject<boolean>	= new Subject<boolean>();

  /** Since the replay from the server will be via signal R, we have to ensure
   * that signal R is up and running.
   */
  public askServerForNewAccessCode(gameId) {
    this.EnsureInitialize().then(
      (res) => {
        console.log('DataCacheService: askServerForNewAccessCode');
        this.generateNewClientId();
        this.srvGameApi.generateNewAccessCode(gameId); 
      });
  }


  private processAllClientMessage(cm: ClientMessage) {

    if(!cm.direction || !(cm.direction === 'Station2SPA')) {
      return;
    }

    if(cm.command === 'Loopback') {
      const nSentMs: number = +cm.parameters;
      console.log('Loopback took: ' + (Date.now() - nSentMs).toString());
      return;
    }

    if(cm.command !== 'AuthenticationTimeout') {
      if(!this.lastAccessResult || !this.lastAccessResult.token) {
        return;
      }

      if(cm.command === 'GenerateAccessCode' || cm.command === 'BeginGame') {
        return;
      }

      // mkmkmk
      // if(this.lastAccessResult.token !== cm.accessToken) {
      //   return;
      // }
    }

    // This client message is for this authenticated client
    this.processClientMessageCommand(cm);
  }

  private processClientMessageCommand(cm: ClientMessage) {
    // console.log('processClientMessageCommand');

    // Messages may be std messages, or specific to be passed on the the game, which observes them via
    // the observable.
    if(cm.command === 'DisplayText') {
      this.alertService.success(cm.parameters, false)
      console.log(cm.parameters);
      return;
    }

    this.clientMessages$.next(cm);
  }


  public refreshCurrentUser(): void {
    this.users$.subscribe(
      users => {
        const u = users.find(x => x.id === this.userId);
        this.currentUser$.next(u);
      }
    )
  }


}
