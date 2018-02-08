export class PizzaModel {
  constructor(
    public Diameter: number,
    public Slices: number,
    public Toppings: number,
    public Price: number = (Diameter) + (Toppings * 5)
  ) { }



  print(): any {
    return {d: this.Diameter};
  }
  // print(): string {
  //   return `
  //     <td>${this.Diameter}</td>
  //     <td>${this.Slices}</td>
  //     <td>${this.Toppings}</td>
  //     <td>${this.Price}</td>
  //   `;
  // }
  // print():string{
  //   return `${this.categoryID} : ${this.categoryName} `;
  // }
}
