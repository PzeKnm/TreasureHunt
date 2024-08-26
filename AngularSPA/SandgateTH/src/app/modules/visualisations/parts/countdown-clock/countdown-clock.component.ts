import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-countdown-clock',
  templateUrl: './countdown-clock.component.html',
  styleUrls: ['./countdown-clock.component.scss']
})
export class CountdownClock implements OnInit {

  @Input() totalSecs: number = 60;
  @Input() remainingSecs: number = 0;
  @Input() remainingQuestionSecs: number = 0;

  // The Height of the control
  public controlHeight: number = 20;
  public controlWidth: number = 10;

  // The "dead space" at the terminus of each end
  public endcapRadius: number = (this.controlHeight / 2);

  // The width of the perimeter
  public strokeWidthOutline = 1.0;

  // The width of the "remaining" bar
  public strokeWidthRemaining = 0.0;

  public fraction = 100.0;

  countdown$;
  
  constructor() { } 

  ngOnInit() {
    console.log('fgfdgf');
    this.countdown$ = interval(1000).pipe(
      tap(t => {
        console.log(t);
      }),
      map(i => this.totalSecs - i),
      takeWhile(time => time >= 0),
      tap(t => {
        this.fraction = (this.totalSecs - t) / this.totalSecs;
      }),
      map(time => ({
        minutes: Math.floor(time / 60),
        seconds: ('0' + time % 60).slice(-2)
      }))
    ).subscribe();
  }

  getViewbox(): string {
    return '0, 0, ' + this.controlWidth.toString() + ', ' + this.controlHeight.toString();
  }

  getRealWorldBarLength(value: number): number {
    const effectiveWidth = (this.controlWidth - (this.endcapRadius * 2));
    let val = (effectiveWidth / this.totalSecs) * value;
    if(val < 0) {
      val = 0;
    }
    return val;
  }

  // returns the length of the bar that represents the remaininf seconds
  getRemainingWidth(): number {
    return this.getRealWorldBarLength(this.remainingSecs);
  }

  getQuestionXPos(): number {
    let pos = this.getRealWorldBarLength(this.remainingSecs - this.remainingQuestionSecs);
    if(pos < 0) {
      pos = 0;
    }
    return pos;
  }

  getQuestionWidth(): number {
    return this.getRealWorldBarLength(this.remainingQuestionSecs);    
  }


  
  getOutlinePath(): string {

    const s = 'M 0,0 '  +
    'L  ' + this.controlWidth + ',' + this.controlHeight + ' ' +
    'L  ' + 0 + ',' + this.controlHeight + ' ' +
    'L  ' + this.controlWidth + ',' + 0 + ' ' +
    'L  ' + 0 + ',' + 0 + ' ' +
    ' Z';  

    return s;
  }

  getTopPath(): string {

    const dMidX = this.controlWidth / 2;
    const dMidY = this.controlHeight / 2;

    const widthOffset = (this.controlWidth / 2) * (1 - this.fraction);
    const heightOffset = (this.controlHeight / 2) * (1 - this.fraction);

    const s = 'M ' + dMidX + ',' + dMidY + ' ' +
    'L  ' + (dMidX - widthOffset) + ',' + (dMidY - heightOffset) + ' ' +
    'L  ' + (dMidX + widthOffset) + ',' + (dMidY - heightOffset) + ' ' +
    'L  ' + dMidX + ',' + dMidY +  ' ' +
    ' Z';  

    return s;
  }

  getBottomPath(): string {

    const dMidX = this.controlWidth / 2;
    const dMidY = this.controlHeight / 2;

    const widthOffset = (this.controlWidth / 2) *  this.fraction;
    const heightOffset = (this.controlHeight / 2) * this.fraction;

    const s = 'M ' + 0 + ',' + this.controlHeight + ' ' +
    'L  ' + this.controlWidth + ',' + this.controlHeight + ' ' +
    'L  ' + (this.controlWidth - widthOffset) + ',' + (this.controlHeight - heightOffset) + ' ' +
    'L  ' + (0 + widthOffset) + ',' + (this.controlHeight - heightOffset) + ' ' +    
    'L  ' + 0 + ',' + this.controlHeight +  ' ' +
    ' Z';  

    return s;
  }

  // getBottomPath(): string {

  //   const dMidX = this.controlWidth / 2;
  //   const dMidY = this.controlHeight / 2;

  //   const widthOffset = (this.controlWidth / 2) *  (1 - this.fraction);
  //   const heightOffset = (this.controlHeight / 2) * (1 - this.fraction);

  //   const s = 'M ' + 0 + ',' + this.controlHeight + ' ' +
  //   'L  ' + this.controlWidth + ',' + this.controlHeight + ' ' +
  //   'L  ' + (dMidX + widthOffset) + ',' + (this.controlHeight - heightOffset) + ' ' +
  //   'L  ' + (dMidX - widthOffset) + ',' + (this.controlHeight - heightOffset) + ' ' +    
  //   'L  ' + 0 + ',' + this.controlHeight +  ' ' +
  //   ' Z';  

  //   return s;
  // }


  getRemainingTotalPath(): string {
    const offset = (this.controlHeight / 2) - this.strokeWidthOutline;
    return this.getOvalPath(offset, this.strokeWidthRemaining, 0, this.getRemainingWidth());
  }

  getRemainingQuestionPath(): string {
    const offset = (this.controlHeight / 2) - this.strokeWidthOutline;
    return this.getOvalPath(offset, this.strokeWidthRemaining, 
      this.getQuestionXPos(), this.getQuestionWidth());
  }
  


  // The centre of the half cicles is always (5, 5) and (95, 5).
  // perimeterOffset is the distance from the middle (y = 5) to the outside of the stroke.
  // strokeWidth will be drawn inside of the perimeter
  // length excludes 2 radii, so length should be > 0 and < 90
  getOvalPath(perimeterOffset: number, strokeWidth: number, start: number, length: number): string {
    
    if(length === 0) {
      return '';
    }

    const ht = (this.endcapRadius - perimeterOffset) + strokeWidth / 2;
    const r = perimeterOffset - (strokeWidth / 2);
    const aStub = ' A ' + r + ',' + r + ' 0 0 0 ';
    const l = length; 

    const s = 'M ' + (start + this.endcapRadius).toString() + ',' + ht +
    aStub + ' ' +    (start + ht).toString() + ',5' +
    aStub + ' ' +    (start + 5).toString()  + ',' + (10 - ht).toString() +
    ' H ' +          (start + this.endcapRadius + l).toString() + 
    aStub + ' ' +    (start + this.endcapRadius +l + r).toString() + ',5' +
    aStub + ' ' +    (start + this.endcapRadius +l).toString() + ',' + ht +
    ' Z';  

    return s;  
  }




}
