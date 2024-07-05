import { Component, OnInit, Input } from '@angular/core';
import { VisualisationData } from 'src/app/services/visualisation-data.service';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {

  @Input() vizData: VisualisationData | undefined = undefined;

  imageSourcePath: string = '';
  
  imageIndex: number = 0;
  
  imageURLs: string[] = [
    'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/633850/machine-mill-industry-steam-633850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/3785935/pexels-photo-3785935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/149387/pexels-photo-149387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/357440/pexels-photo-357440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/9333/sky-red-art-blue-9333.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/289665/pexels-photo-289665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/207367/pexels-photo-207367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/977526/pexels-photo-977526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/220237/pexels-photo-220237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/859895/pexels-photo-859895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/114108/pexels-photo-114108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/38920/pexels-photo-38920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1410448/pexels-photo-1410448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/3784316/pexels-photo-3784316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  ]


  changeImage$: Observable<number> = timer(0, 20000);

  constructor() { }

  ngOnInit() {
    this.getNewImage();

    this.changeImage$.subscribe((val) => {
      this.getNewImage();
    });

  }

  private getNewImage(): void {
    this.imageSourcePath = this.imageURLs[this.imageIndex];
    this.imageIndex++;
    if(this.imageIndex > this.imageURLs.length - 1)
      this.imageIndex = 0;
  }



}
