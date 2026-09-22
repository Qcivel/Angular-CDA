import { Component,Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-active-user',
  styleUrl: './active-user.css',
  templateUrl: './active-user.html',
})
export class ActiveUser {
  @Input() nameUser: string='';
  @Input() ageUser: number=0;
}
