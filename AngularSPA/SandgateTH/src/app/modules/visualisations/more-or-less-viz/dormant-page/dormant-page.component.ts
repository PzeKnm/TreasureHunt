import { Component, OnInit, Input } from '@angular/core';
import { VisualisationData } from 'src/app/services/visualisation-data.service';

@Component({
  selector: 'app-dormant-page',
  templateUrl: './dormant-page.component.html',
  styleUrls: ['./dormant-page.component.scss']
})
export class DormantPageComponent implements OnInit {

  @Input() vizData: VisualisationData | undefined = undefined;
  
  constructor() { }

  ngOnInit() {
  }

}
