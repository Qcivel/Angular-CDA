import { Component } from '@angular/core';

interface User {
  id:number
  name:string
  age:number
  image:string
  bio:string
  status:'online' | 'offline'
  github:string
}

@Component({
  imports: [],
  selector: 'app-attribute-binding',
  styleUrl: './attribute-binding.css',
  templateUrl: './attribute-binding.html',
})
export class AttributeBinding {
  user:User = {
    id : Math.random(),
    name: "bob",
    age: 34,
    image : 'https://i.pravatar.cc/150?u=1' ,
    bio:" Une bio de bob",
    status: "online",
    github:'https://github.com/Qcivel/Angular-CDA.git',
}
}


