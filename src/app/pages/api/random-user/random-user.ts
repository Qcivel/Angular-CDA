import { Component, signal } from '@angular/core';
import { RandomUser } from '../../../services/random-user';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-http-api',
  imports: [NgOptimizedImage],
  templateUrl: './random-user.html',
  styleUrl: './random-user.css',
})
export class HttpApi {
  title: string = 'apiData';
  newData = signal<any>(null);
  constructor(private apiService: RandomUser) {}

  ngOnInit() {
    this.apiService.getData().subscribe((responseApi) => {
      this.newData.set(responseApi);
      console.log(this.newData());

    });
  }
}