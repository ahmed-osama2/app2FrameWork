import { PortfolioComponent } from './portfolio/portfolio.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'',redirectTo:'Start Framework',pathMatch:'full'},
    { path: 'Start Framework', component: HomeComponent, title: 'home page' },
    { path: 'ABOUT', component: AboutComponent, title: 'about page' },
    { path: 'PORTFOLIO', component: PortfolioComponent, title: 'portflio' },
    { path: 'CONTACT', component: ContactComponent, title: 'contact page' },
    {path:'**',component: NotfoundComponent,title: 'Not found'}
    
]
