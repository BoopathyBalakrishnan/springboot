import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login.component';
import { AboutComponent } from '../about/about.component';


//Route Configuration
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
];

export const routing = RouterModule.forRoot(routes);

