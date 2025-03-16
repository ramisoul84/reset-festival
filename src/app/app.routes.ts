import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TicketsPageComponent } from './pages/tickets-page/tickets-page.component';

export const routes: Routes = [
    { path: '', component: IntersectionObserver},  
    { path: 'home', component: HomePageComponent},   
    { path: 'tickets', component: TicketsPageComponent},   
    { path: '**', redirectTo: '' }
];
