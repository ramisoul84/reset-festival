import { AfterViewInit, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { MusicComponent } from '../../components/music/music.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { FashionComponent } from '../../components/fashion/fashion.component';
import { WorkComponent } from '../../components/work/work.component';
import { TicketsComponent } from '../../components/tickets/tickets.component';
import { FooterComponent } from '../../components/footer/footer.component';
import AOS from 'aos';


@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    HeaderComponent, 
    HeroComponent,
    MusicComponent,
    ExperienceComponent,
    FashionComponent,
    WorkComponent,
    TicketsComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements AfterViewInit {
  color:string='#557376';
  isMobile:boolean=false;

  constructor() {
    this.checkIfMobile();
  }
  
  ngAfterViewInit() {
    AOS.init(); 
    setTimeout(() => {
      AOS.refresh(); 
    }, 500); 
  }

  checkIfMobile() {
    // Regular expression to check for common mobile devices
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    this.isMobile = mobileRegex.test(navigator.userAgent);
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
        this.color = '#557376'
      }else if (fashionPosition - height < 50) {
        this.color = '#db8a08'
      }else if (experiencePosition - height < 50) {
        this.color = '#557376'
      }else if (musicPosition - height < 50) {
        this.color = '#db8a08'
      }else if (heroImgPosition - height < 50) {
        this.color = '#557376'
      }else{
        this.color = 'transparent'
    }
  }

  circleStyle = {
    transform: 'translate(0px, 0px)',
    width: '10px', // Default size
    height: '10px', // Default size
    opacity:1,
    transition: 'all 0.15s ease-out, height 0.2s ease-out' // Smooth size transition
  };

  private mouseX = 0;
  private mouseY = 0;
  private circleX = 0;
  private circleY = 0;
  private speed = 0.01; // Adjust speed for smoother or faster movement
  private opacity = 1;
  private circleSize = 10; // Default diameter of the circle
  protected text!:string;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Adjust mouse coordinates to center the circle on the pointer
    this.mouseX = event.clientX - this.circleSize / 2;
    this.mouseY = event.clientY - this.circleSize / 2;
    this.moveCircle();
  }

  private moveCircle() {
    const dx = this.mouseX - this.circleX;
    const dy = this.mouseY - this.circleY;

    // Calculate the distance between the circle and the pointer
    const distance = Math.sqrt(dx * dx + dy * dy);

    // If the distance is very small, snap the circle to the pointer
    if (distance < 1) {
      this.circleX = this.mouseX;
      this.circleY = this.mouseY;
    } else {
      // Move the circle towards the pointer
      this.circleX += dx * this.speed;
      this.circleY += dy * this.speed;
    }

    // Update the circle's position
    this.circleStyle.transform = `translate(${this.circleX}px, ${this.circleY}px)`;

    // If the mouse has stopped, force the circle to catch up
    if (distance > 0) {
      requestAnimationFrame(() => this.moveCircle());
    }
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    // Check if the mouse is over a specific element (e.g., a button or div)
    const target = event.target as HTMLElement;
    if (target.classList.contains('hover-target')) {
      this.circleSize = 40// Increase circle size
      this.opacity = 0.4;
      this.updateCircleStyle();
    }

    if (target.classList.contains('link-target')) {
      this.circleSize = 50
      this.opacity = 0.8;
      this.text = 'open link'
      this.updateCircleStyle();
    }
  }

  @HostListener('document:mouseout', ['$event'])
  onMouseOut(event: MouseEvent) {
    // Check if the mouse leaves the specific element
    const target = event.target as HTMLElement;
    if (target.classList.contains('hover-target') || target.classList.contains('link-target')) {
      this.circleSize = 10; // Reset circle size
      this.opacity = 1;
      this.text=""
      this.updateCircleStyle();
    }
  }

  private updateCircleStyle() {
    // Update the circle's size
    this.circleStyle.width = `${this.circleSize}px`;
    this.circleStyle.height = `${this.circleSize}px`;
    this.circleStyle.opacity = this.opacity;
   
  }

  @HostListener('window:resize')
  onResize() {
    this.checkIfMobile();
  }

  goTop(){
    document
    .getElementById('hero')!
    .scrollIntoView({ behavior: 'smooth' });
  }
}
