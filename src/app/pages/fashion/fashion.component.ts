import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fashion',
  imports: [CommonModule],
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.scss'
})
export class FashionComponent {
  fashion: string[] = [
    'images/fashion/1.jpg',
    'images/fashion/2.jpg',
    'images/fashion/3.jpg',
    'images/fashion/4.jpg',
    'images/fashion/5.jpg',
    'images/fashion/6.jpg',
    'images/fashion/7.jpg',
    'images/fashion/8.jpg',
    'images/fashion/9.jpg',
    'images/fashion/10.jpg',
    'images/fashion/11.jpg',
    'images/fashion/12.jpg',
    'images/fashion/13.jpg',
    'images/fashion/14.jpg',
    'images/fashion/15.jpg',
    'images/fashion/16.jpg',
    'images/fashion/17.jpg',
    'images/fashion/18.jpg',
    'images/fashion/19.jpg',
    'images/fashion/20.jpg',
    'images/fashion/21.jpg',
    'images/fashion/22.jpg',
    'images/fashion/23.jpg',
  ];
}
