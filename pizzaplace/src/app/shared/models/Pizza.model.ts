export class PizzaModel {
  constructor(
    public Diameter: number,
    public Slices: number,
    public Toppings: number,
    public Price: number = (Diameter) + (Toppings * 5)
  ) { }
