import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input() images: string[] = [];


  ngAfterViewInit() {
    const swiper:any = document.querySelector('.swiper-container');

    swiper.on('slideChangeTransitionEnd', () => {
      if (swiper.isEnd) {
        // Force update pagination when reaching the end
        swiper.pagination.update();
        swiper.pagination.render();
      }
    });
  }
}
