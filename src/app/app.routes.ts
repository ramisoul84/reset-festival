import { Routes } from '@angular/router';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TicketsPageComponent } from './pages/tickets-page/tickets-page.component';
import { DjerbaComponent } from './pages/djerba/djerba.component';
import { FashionComponent } from './pages/fashion/fashion.component';


export const routes: Routes = [
    { path: '', component: IntroPageComponent},  
    { path: 'home', component: HomePageComponent},   
    { path: 'tickets', component: TicketsPageComponent},   
    { path: 'djerba', component: DjerbaComponent},  
    { path: 'fashion', component: FashionComponent},  
    { path: '**', redirectTo: '' }
];
