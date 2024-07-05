import { Component, OnInit, Input, NgZone, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-movie-text',
  templateUrl: './movie-text.html',
  styleUrls: ['./movie-text.scss']
})
export class MovieText implements OnInit {


  @ViewChild('canvas', {  }) 
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  requestId;


  private lineXPos:  number = 300;
  
  constructor(private ngZone: NgZone) { } 

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
   
    this.ngZone.runOutsideAngular(() => this.tick());
    setInterval(() => {
      this.tick();
    }, 200);

  }

  
  tick() {
    this.requestId = requestAnimationFrame(() => this.tick);
  }


  randomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
  }

  getMainStyles() {
    return {  
      'opacity':     0.7 + Math.random() / 4,
      'transform': 'translate3d(' + Math.random() * 1 + 'px, ' + 
                    Math.random() * 1 + 'px, 0px)'
    }
  }

  getLineStyles() {
    this.lineXPos += Math.random() * 3;
    if(this.lineXPos < 0) {
      this.lineXPos = this.ctx.canvas.width - 10;
    }
    if(this.lineXPos > this.ctx.canvas.width) {
      this.lineXPos = 10;
    }

    return {        
      'transform': 'translate3d(' + this.lineXPos + 'px, ' + 
                    Math.random() * 1 + 'px, 0px)'
    }
  }


  private getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }


}
