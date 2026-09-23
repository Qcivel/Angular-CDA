import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomUser {
  constructor(private http:HttpClient){}
  getData(){
    return this.http.get('https://randomuser.me/api/');
  }
}