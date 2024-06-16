// Абстрактный класс Pizza
abstract class Pizza {
  protected name: string = "";
  protected dough: string = "";
  protected sauce: string = "";
  protected toppings: Array<string> = [];

  public getName(): string {
    return this.name;
  }

  public prepare(): void {
    console.log("Preparing " + this.name);
  }

  public bake(): void {
    console.log("Baking " + this.name);
  }

  public cut(): void {
    console.log("Cutting " + this.name);
  }

  public box(): void {
    console.log("Boxing " + this.name);
  }
}

// Конкретные классы со своими особенностями реализации
class CheesePizza extends Pizza {}
class PepperoniPizza extends Pizza {}
class ClamPizza extends Pizza {}
class VeggiePizza extends Pizza {}

export class SimplePizzaFactory {
  public createPizza(type: string): Pizza {
    let pizza: Pizza | null = null;

    if (type === "cheese") {
      pizza = new CheesePizza();
    } else if (type === "pepperoni") {
      pizza = new PepperoniPizza();
    } else if (type === "clam") {
      pizza = new ClamPizza();
    } else if (type === "veggie") {
      pizza = new VeggiePizza();
    }
    return pizza!;
  }
}

export class PizzaStore {
  private factory: SimplePizzaFactory;

  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  public orderPizza(type: string): Pizza {
    const pizza: Pizza = this.factory.createPizza(type); // Важно! Не через new создается экземпляр pizza

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}
