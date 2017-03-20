
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { AppComponent } from '../slist/app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import {HomeComponent } from './login/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './login/app.route';
import { SlistService } from './slist.service';
import {ColorChange} from './status.directive';
import {NamePipe} from './name.filter';


@NgModule( {
    imports: [BrowserModule,FormsModule,routing,HttpModule],//all moduels,routing
    declarations: [AppComponent,HomeComponent,LoginComponent,AboutComponent,ColorChange,NamePipe],//all components
    providers: [SlistService], //all services
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [AppComponent]//root comp,
})


export class AppModule {}