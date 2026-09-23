import { Component, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-observables',
  styleUrl: './observables.css',
  templateUrl: './observables.html',
})
export class Observables {
  numbers = signal<number[]>([]);
  subscription: Subscription | null = null;
  paused = signal<boolean>(false);
  count:number = 0 ;


  start() :void{
    if(!this.subscription){

      const countIntervable$ = interval(1000);
      
      this.subscription = countIntervable$.subscribe({
        next: (value) => {
          console.log(value)
          const randomNumbers:number = Math.floor(Math.random() * 100) + 1
          this.numbers.update((prevNumbers) => [...prevNumbers, randomNumbers]);
        }
      })    
    }
  }
  stop(): void {
    console.log('Arrêt du générateur.');
    this.stopSubscription();

    // 💡 .set() écrase la valeur du signal
    this.numbers.set([]);
    this.paused.set(false);
  }

  stopSubscription() :void{
    if(this.subscription){
      this.subscription.unsubscribe();
      this.subscription = null
    }
  }

  pauseResume() :void{
      this.paused.set(!this.paused());
      if (this.paused()){
        this.stopSubscription()
      }else{
        this.start();
      }
  }
}