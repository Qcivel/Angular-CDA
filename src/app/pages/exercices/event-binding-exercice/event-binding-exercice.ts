import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event-binding-exercice',
  styleUrl: './event-binding-exercice.css',
  templateUrl: './event-binding-exercice.html',
})

export class EventBindingExercice {
  password:string = "";
  btnDisable=signal(false);
  constructor(){
    console.log("Début de vie du composant");
    setTimeout(()=>{
      this.btnDisable.set(true);
    },5000);
  }

  listFriendsCreationStatus:string = "aucun ami";

  onKeyUp(event: Event){
    const input = event.target as HTMLInputElement;
    this.password = input.value;
  }

  
}
