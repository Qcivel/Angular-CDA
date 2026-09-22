import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  imports: [NgClass,NgStyle],
  selector: 'app-directives',
  styleUrl: './directives.css',
  templateUrl: './directives.html',
})
export class Directives {
  count:number = 0;
  tab:number[] = [];
  onClick:boolean = false;
  textColor:String="";
  nbrCount(){
    this.count ++;
    this.onClick = !this.onClick;
    this.tab.push(this.count);
    
  }

  colorChange(){
    if(this.count >=5){
      this.textColor = "red"
    }
  }
}
