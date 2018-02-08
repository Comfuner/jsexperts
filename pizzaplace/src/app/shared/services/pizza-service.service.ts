import { Injectable } from '@angular/core';
import { PizzaModel} from '../models/Pizza.model';

@Injectable()
export class PizzaServiceService {

   rando(min, max): number {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }

  getPizzas(): PizzaModel[] {
    let pizzas = new Array<PizzaModel>();
    for (let i = 0 ; i < 100 ; i++) {
      pizzas[i] = new PizzaModel(this.rando(10, 50), this.rando(3, 8), this.rando(0, 4));
    }
    return pizzas;
  }
  constructor() { }

}
