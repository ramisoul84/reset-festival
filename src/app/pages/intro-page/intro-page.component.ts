import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-intro-page',
  imports: [CommonModule,RouterLink,LottieComponent],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss'
})
export class IntroPageComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  showResetLoop = false;
  resetInOptions: AnimationOptions = {
    path: 'animations/reset-in.json',
    loop:false,
  };
  resetLoopOptions: AnimationOptions = {
    path: 'animations/reset-loop.json',
    loop:true,
  };

  animationCreated(animationItem: AnimationItem): void {
    animationItem.addEventListener('complete', () => {
      animationItem.destroy();
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.showResetLoop = true;
    }, 5000); 
    const video = this.videoPlayer.nativeElement;
    video.muted = true;
    video.controls=false;
    video.loop = true;
    video.play(); // Start playing the video
  }

  sound(event: Event){
    event.stopPropagation(); // Stop the event from bubbling up to the parent
    const video = this.videoPlayer.nativeElement;
    video.muted=true
  }
}
