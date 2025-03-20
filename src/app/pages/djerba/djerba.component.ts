import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-djerba',
  imports: [CommonModule],
  templateUrl: './djerba.component.html',
  styleUrl: './djerba.component.scss'
})
export class DjerbaComponent {
  show:boolean=false;
  src:string= '';
  djerba: string[] = [
    'images/djerba/1.jpg',
    'images/djerba/2.jpg',
    'images/djerba/3.jpg',
    'images/djerba/4.jpg',
    'images/djerba/5.jpg',
    'images/djerba/6.jpg',
    'images/djerba/7.jpg',
    'images/djerba/8.jpg',
    'images/djerba/9.jpg',
    'images/djerba/10.jpg',
    'images/djerba/11.jpg',
    'images/djerba/12.jpg',
    'images/djerba/13.jpg',
    'images/djerba/14.jpg',
    'images/djerba/15.jpg',
    'images/djerba/16.jpg',
    'images/djerba/17.jpg',
    'images/djerba/18.jpg',
    'images/djerba/19.jpg',
    'images/djerba/20.jpg',
    'images/djerba/21.jpg',
    'images/djerba/22.jpg',
  ];

  onImageClick(event: Event):void{
    const imageElement = event.target as HTMLImageElement;
    this.src = imageElement.src;
    this.show = !this.show
  }
}
