import { Component, OnInit, Input } from '@angular/core';
import { GameDto } from 'src/app/shared/model/game';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
  styleUrls: ['./game-summary.component.scss']
})
export class GameSummaryComponent implements OnInit {

  @Input() gameSummary: GameDto;
  
  constructor() {
    this.gameSummary ={
      id: 'dummyId',
      name: 'dummyName',
      description: 'dummyName',
      status: 'dummyName',
      lastContactDate: new Date(),
    }
  }

  ngOnInit() {
  }

  public isReadyToPlay() : boolean {
    if( this.gameSummary.status === 'Online_Ready' ||
        this.gameSummary.status === 'Online_Demo' ||
        this.gameSummary.status === 'Online_Dormant' )
      return true;

    return false;
  }

}
