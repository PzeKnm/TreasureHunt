import { Component, OnInit, Input } from '@angular/core';
import { VisualisationData } from 'src/app/services/signal-r.service';


@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss']
})
export class AuthenticationPageComponent implements OnInit {

  @Input() vizData: VisualisationData | undefined = undefined;
  
  constructor() { }

  ngOnInit() {
  }

}
