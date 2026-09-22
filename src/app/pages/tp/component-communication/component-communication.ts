import { Component } from '@angular/core';
import { ActiveUser } from './active-user/active-user';
import { UserData } from './user-data/user-data';

@Component({
  imports: [ActiveUser, UserData],
  selector: 'app-component-communication',
  styleUrl: './component-communication.css',
  templateUrl: './component-communication.html',
})
export class ComponentCommunication {
  name:string = "bob"
  age:number = 25

  myEmitTest(event:{name:string, age:number}){
    this.name = event.name;
    this.age = event.age;
  }
}
