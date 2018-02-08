import { Component, OnInit } from '@angular/core';
import {PizzaServiceService} from '../shared/services/pizza-service.service';
import {PizzaModel} from '../shared/models/Pizza.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pizzas: PizzaModel[];

  constructor(private pizzaService: PizzaServiceService) { }

  ngOnInit() {
    this.pizzas = this.pizzaService.getPizzas();
  }

}
