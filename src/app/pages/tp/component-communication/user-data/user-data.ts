import { Component, EventEmitter, Output, Input } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  imports: [FormsModule],
  selector: 'app-user-data',
  styleUrl: './user-data.css',
  templateUrl: './user-data.html',
})
export class UserData {
  name: string = "";
  age:number = 0;
  
  @Output() myEmit = new EventEmitter<{name: string, age: number}>();

  parent(){
    this.myEmit.emit({name: this.name, age: this.age});
  }
}
