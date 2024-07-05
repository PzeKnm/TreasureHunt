import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[potential-score]',
  templateUrl: './potential-score.html',
  styleUrls: ['./potential-score.scss']
})
export class PotentialScore implements OnInit {

  // The text for the label, should be between 0 and 10
  @Input() value: number = 99;

  // The position of the point that corresponds to the value. The
  // lable should be horizontally centred at this point, and offset above.
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() width: number = 10;
  @Input() height: number = 7;
  @Input() visible: boolean = false;

  opacityValue: number = 0.5;

  public strokeWidth: number = 2;

  public strokeColour: string = '#333'; 
  
  public fillColour: string = '#999'; 

  constructor() { } 

  ngOnInit() {
    
  }

  public getRectXPos(): number {
    return this.x - (this.width / 2);
  } 

  public getRectYPos(): number {
    return this.y - 5;
  } 


  public getTextXPos(): number {
    return this.x; //  + (this.width / 2);
  } 

  public getTextYPos(): number {
    return this.y - 1.5;
  } 

  public getPoints(): string {
    const s: string = 
       this.x.toString() + ',' + this.y.toString() + ' ' + 
       (this.x - 1).toString() + ',' + (this.y - 4).toString() + ' ' +  
       (this.x + 1).toString() + ',' + (this.y - 4).toString() + ' ';
    return s;
  }


  getStrokeColour(): string {
    return this.strokeColour;
  }

  getFillColour(): string {
    // http://web-tech.ga-usa.com/2012/05/creating-a-custom-hot-to-cold-temperature-color-gradient-for-use-with-rrdtool/index.html
    if (this.value > 9) {
      return '#FF3200';
    }
    if (this.value > 8) {
      return '#FF7800';
    }
    if (this.value > 7) {
      return '#FFa000';
    }
    if (this.value > 6) {
      return '#FFc800';
    }
    if (this.value > 5) {
      return '#FFf000';
    }
    if (this.value > 4) {
      return '#d7ff00';
    }
    if (this.value > 3) {
      return '#65ff00';
    }
    if (this.value > 2) {
      return '#00ff10';
    }
    if (this.value > 1) {
      return '#00ff83';
    }
    return '#00fff4'; 
  }


}
