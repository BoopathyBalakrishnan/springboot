import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginModule } from '../login/loginmodule';
import { Router } from '@angular/router';
import { SlistService } from '../slist.service';
import { Slist } from '../slist';
@Component({
  selector: 'my-view', // <my-app></my-app>
  templateUrl: 'slist/login.component.html',

})

export class LoginComponent /*implements OnInit */{

  @ViewChild('username') usrName: ElementRef;
  @ViewChild('password') password: ElementRef;
  inputValue: String;
  constructor(private router: Router, private slistService: SlistService) {
  }
  names: Slist[];
  model = new LoginModule('Angular2', 'password');

  getNames(event: Event) {

let usernamee=this.usrName.nativeElement.inputValue;
debugger;
let password=this.password.nativeElement.inputValue;
    console.log('User logged in as: ', usernamee);
    console.log('Password: ', password);
    console.log('Event is ', event);
    this.slistService.getNames().subscribe(nameList => this.names = nameList);

  }


  onSubmit() {

    this.model = new LoginModule('hh', 'hh');
    console.log("loginform");

    for (let i = 0; i < this.names.length; i++) {
      console.log("loginform for loop");



    } this.router.navigate(['home']);
  }
  /*ngOnInit() {
    this.getNames(event);

  }*/
}




