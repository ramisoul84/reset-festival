import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-experience',
  imports: [SliderComponent,RouterLink],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
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

  hotel: string[] = [
    'images/hotel/1.jpg',
    'images/hotel/2.jpg',
    'images/hotel/3.jpg',
    'images/hotel/4.jpg',
    'images/hotel/5.jpg',
  ];
}
