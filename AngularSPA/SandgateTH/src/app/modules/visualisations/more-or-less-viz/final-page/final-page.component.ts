import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { VisualisationData } from 'src/app/services/signal-r.service';


@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.scss']
})
export class FinalPageComponent implements OnInit {

  @Input() vizData: VisualisationData | undefined = undefined;
  

  constructor() { }

  ngOnInit() {

  }


  getScoreCommentary(): string {
    if(this.vizData.score > 50) {
      return 'Pigging brilliant!!';
    }

    if(this.vizData.score > 40) {
      return 'Trotters alive! A stirling effort';
    }

    if(this.vizData.score > 30) {
      return 'Oh...My...Gammon!';
    }

    if(this.vizData.score > 20) {
      return 'Snout to be ashamed of';
    }

    if(this.vizData.score > 10) {
      return 'So close, and yet sow far';
    }

    return 'Pork scratchings for brains!';
  }


}
