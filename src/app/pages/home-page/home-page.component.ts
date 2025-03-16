import { AfterViewInit, Component } from '@angular/core';
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
  ngAfterViewInit() {
    AOS.init(); 
    setTimeout(() => {
      AOS.refresh(); 
    }, 500); 
  }
}
