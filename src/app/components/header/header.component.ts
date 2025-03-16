import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerColor: string = '#e63704';
  isMenuOpened:boolean = false;

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
  }


  scrollToPage(page: string) {
    this.isMenuOpened = !this.isMenuOpened;
    setTimeout(() => {
      document
      .getElementById(page.toLowerCase())!
      .scrollIntoView({ behavior: 'smooth' });
    }, 600); 
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const heroImgSection = document.getElementById('hero-img');
    const musicSection = document.getElementById('music-img');
    const adventureSection = document.getElementById('experience-img');
    const fashionSection = document.getElementById('fashion-img');
    const WorksSection = document.getElementById('work-img');
    const height = window.innerHeight
      const heroImgPosition = heroImgSection!.getBoundingClientRect().bottom;
      const musicPosition = musicSection!.getBoundingClientRect().bottom;
      const experiencePosition = adventureSection!.getBoundingClientRect().bottom;
      const fashionPosition = fashionSection!.getBoundingClientRect().bottom;
      const WorksPosition = WorksSection!.getBoundingClientRect().bottom;
      if (WorksPosition - height < 50) {
        this.headerColor = '#e63704'
      }else if (fashionPosition - height < 50) {
        this.headerColor = '#557376'
      }else if (experiencePosition - height < 50) {
        this.headerColor = '#e63704'
      }else if (musicPosition - height < 50) {
        this.headerColor = '#557376'
      }else if (heroImgPosition - height < 50) {
        this.headerColor = '#e63704'
      }
  }
}
