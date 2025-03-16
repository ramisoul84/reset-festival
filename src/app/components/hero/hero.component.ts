import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-hero',
  imports: [LottieComponent,CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  resetHeroOptions: AnimationOptions = {
    path: 'animations/reset-hero.json',
    loop:true,
  };

  placeText = 'DJERBA';
  dateText = '26.11-02.12.2025';

  // Split text into letters
  placeLetters = this.placeText.split('');
  dateLetters = this.dateText.split('');
}
