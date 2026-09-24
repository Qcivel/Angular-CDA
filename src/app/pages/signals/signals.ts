import { Component, computed, signal, effect } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signals',
  styleUrl: './signals.css',
  templateUrl: './signals.html',
})
export class Signals {

  quantity = signal<number>(Number(localStorage.getItem('panier') ?? 1));
  unitPrice = signal<number>(35);
  discountCode = signal<number>(0);
  isExpressShipping = signal<boolean>(false);


  subtotal = computed(()=>{
    return this.quantity() * this.unitPrice()
  });

  discountAmount = computed(()=>{
    return this.subtotal() * (this.discountCode() / 100);
  });

  shippingFee = computed(()=>{
    if(this.quantity() === 0){
      return 0
    }else if( this.isExpressShipping()){
      return 12
    }else if(this.subtotal() >= 100){
      return 0
    }else{
      return 5
    }
  });

  solde(pourcentage: number){
    this.discountCode.set(pourcentage);
  }
  
  total = computed(()=>{
    return this.subtotal() - this.discountAmount() + this.shippingFee();
  })

  increment(){
    this.quantity.update(value => value + 1 );
  }
  decrement(){
    this.quantity.update(value => value - 1 );
  }
  
  constructor(){
    effect(() => {
      localStorage.setItem("panier", String(this.quantity()));
    
    });
  }
}

