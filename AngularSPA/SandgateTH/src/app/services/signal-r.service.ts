import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { Observable } from "rxjs";
//import { SignalRConnectionInfo } from "./signalr-connection-info.model";
import { map, delay } from "rxjs/operators";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";

/** Internal class */
class SignalRConnectionInfo {
  url: string;
  accessToken: string;
}


export class Question
{
  public questionKey: number;
  public category: string;
  public questionText: string;
  public answer: number;
  public rangeLo: number;
  public rangeHi: number;
}



export class VisualisationData {

  public environmentStatus: number
  public gameState: string;

  /**
   *   Ready = 0,
      FetchQuestion,
      DisplayQuestion,
      DisplayAnswer
   */
  public internalState: string; 
  public accessCode: number;
  public currentQuestion: Question; 
  public currentQuestionMin: number;
  public currentQuestionMax: number;
  public currentAnswerLo: number;
  public currentAnswerHi: number;
  public potentialScore: number;
  public score: number;
  public totalGameSecs: number; // not just the game mode, could be auth or postgame too
  public remainingSecs: number; // not just the game mode, could be auth or postgame too
  public remainingQuestionSecs: number; // only used in game playing mode 
}


export class ClientMessage {
  sender: string;
  stationId: string;
  direction: string;
  accessToken: string;
  command: string;
  parameters: string;
}


@Injectable()
export class SignalRService {

    private readonly _http: HttpClient;
    private _baseUrl: string = '';

    private hubConnection: HubConnection;

    // Incoming client messages, may not all be for this client
    allClientMessages$: Subject<ClientMessage> = new Subject();

    constructor(http: HttpClient) {
      this._http = http;
      this._baseUrl = environment.restApiBaseUrl;
    }

    private getConnectionInfo(): Observable<SignalRConnectionInfo> {
        let requestUrl = `${this._baseUrl}negotiate`;
        return this._http.get<SignalRConnectionInfo>(requestUrl, 
          { withCredentials: false });
    }

    /**  */
    public init(): Promise<boolean> {

      const promise = new Promise<any>((resolve:any, reject: any): any =>{

        const prm = this.getConnectionInfo().toPromise();
        prm.then(async (info) => {
  
          let options = {
            accessTokenFactory: () => info.accessToken,
            withCredentials : false
          };
  
          this.hubConnection = new signalR.HubConnectionBuilder()
              .withUrl(info.url, options)           
              .configureLogging(signalR.LogLevel.Information)
              .build(); 
  
          this.hubConnection.on('ClientMessage', (data: any) => {
            let cm = new ClientMessage();
            cm.sender = data.Sender;
            cm.stationId = data.StationId;
            cm.direction = data.Direction;              
            cm.accessToken = data.AccessToken;
            cm.command = data.Command;
            cm.parameters = data.Parameters;  
            this.allClientMessages$.next(cm);
          });       
  
          await this.hubConnection.start()
          .then(() =>  {
            console.log('hubConnection started');
            resolve(true);
           } )
          .catch(
            err => {
              console.error(err.toString());
              reject(false);
            });          
        })

      })

      return promise;
    }

    send(message: string): Observable<void> {
      let requestUrl = `${this._baseUrl}message`;
      return this._http.post(requestUrl, message).pipe(map((result: any) => { }));  
    }
}