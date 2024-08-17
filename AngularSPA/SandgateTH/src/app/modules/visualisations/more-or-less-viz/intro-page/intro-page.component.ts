import { Component, OnInit, Input } from '@angular/core';
import { VisualisationData } from 'src/app/services/signal-r.service';


@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {

  @Input() vizData: VisualisationData | undefined = undefined;
  
  constructor() { }

  ngOnInit() {
  }

}
