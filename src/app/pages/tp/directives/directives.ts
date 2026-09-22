import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-directives',
  styleUrl: './directives.css',
  templateUrl: './directives.html',
})
export class Directives {
  count:number = 0;
  tab:number[] = [];
  onClick:boolean = false;
  nbrCount(){
    this.count ++;
    this.onClick = !this.onClick;
    this.tab.push(this.count);
  }
}
