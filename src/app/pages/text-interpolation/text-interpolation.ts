import { Component } from '@angular/core';

interface User {
  name:string
  status:boolean
  role:string
}

@Component({
  imports: [],
  selector: 'app-text-interpolation',
  styleUrl: './text-interpolation.css',
  templateUrl: './text-interpolation.html',
})
export class TextInterpolation {

  note:number = 20;
  pourcentage:number = 75;
  
  user:User={
    name: "Alexandre Dupont Deligones",
    status: true,
    role:"Maçon"
  }

  tab:string[] = ["Angular 22", "TypeScript", "DaisyUI"];

}
