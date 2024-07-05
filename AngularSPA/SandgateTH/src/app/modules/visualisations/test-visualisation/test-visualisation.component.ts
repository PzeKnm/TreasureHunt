import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDto } from 'src/app/shared/model/game';
import { VisualisationData, Question } from 'src/app/services/visualisation-data.service';
import { DataCacheService } from 'src/app/services/data-cache.service';


// http://localhost:4200/visualisations/TestViz

@Component({
  selector: 'app-test-visualisation',
  templateUrl: './test-visualisation.component.html',
  styleUrls: ['./test-visualisation.component.scss']
})
export class TestVisualisationComponent implements OnInit {

  private subscriptions = new Subscription();

  public users: Array<UserDto> = [];

  public currentUser: UserDto;

  public amount: number | string = '';

  public vizData: VisualisationData;
  public vizDataDemo: VisualisationData;
  public vizDataDormant: VisualisationData;


  constructor(private dataCache: DataCacheService) { }

  ngOnInit() {
    this.subscriptions.add(
      this.dataCache.users$.subscribe(response => {
        this.users = response;
      })
    );

    this.subscriptions.add(
      this.dataCache.currentUser$.subscribe(response => {
        this.currentUser = response;
      })
    );

    this.dataCache.refreshCurrentUser();

    this.vizData = new VisualisationData();
    this.vizData.gameState = 'Online_Ready';
    this.vizData.accessCode = 1234;
    this.vizData.internalState = 'DisplayQuestion'; // DisplayAnswer
    this.vizData.potentialScore = 8;
    this.vizData.score = 4;
    this.vizData.currentQuestion = new Question();
    this.vizData.currentQuestion.questionText = 'When was the Battle of Hastings?';
    this.vizData.currentQuestion.answer = 1066;
    this.vizData.currentQuestionMin = 1016;
    this.vizData.currentQuestionMax = 1278;
    this.vizData.currentAnswerLo = 1047;
    this.vizData.currentAnswerHi = 1122;  
    this.vizData.totalGameSecs = 60;   
    this.vizData.remainingSecs = 40;
    this.vizData.remainingQuestionSecs = 7; 

    this.vizDataDemo = new VisualisationData();
    this.vizDataDemo.gameState = 'Online_Demo';
    
    this.vizDataDormant = new VisualisationData();
    this.vizDataDormant.gameState = 'Online_Dormant';


  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onCodeEntered(s: string): void {
    console.log('try using ' + s);
  }

  incScore(n: number): void {
    this.vizData.score += n;
  }

}
