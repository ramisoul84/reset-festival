import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
}
