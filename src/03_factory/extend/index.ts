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

class NYStyleCheesePizza extends Pizza {
  constructor() {
    super();

    this.name = "NY Style Sauce and Cheese Pizza";
    this.dough = "Thin Crust Dough";
    this.sauce = "Marinara Sauce";

    this.toppings.push("Grated Reggiano Cheese");
  }

  cut(): void {
    console.log("Cutting the pizza into wedge slices");
  }
}

class NYStyleClamPizza extends Pizza {
  constructor() {
    super();
    this.name = "NY Style Clam Pizza";
    this.dough = "Thin Crust Dough";
    this.sauce = "Marinara Sauce";

    this.toppings.push("Grated Reggiano Cheese");
    this.toppings.push("Fresh Clams from Long Island Sound");
  }

  cut(): void {
    console.log("Cutting the pizza into wedge slices");
  }
}

class NYStylePepperoniPizza extends Pizza {
  constructor() {
    super();

    this.name = "NY Style Pepperoni Pizza";
    this.dough = "Thin Crust Dough";
    this.sauce = "Plum Tomato Sauce";

    this.toppings.push("Shredded Mozzarella Cheese");
    this.toppings.push("Black Olives");
    this.toppings.push("Spinach");
    this.toppings.push("Eggplant");
    this.toppings.push("Sliced Pepperoni");
  }

  cut(): void {
    console.log("Cutting the pizza into wedge slices");
  }
}

class NYStyleVeggiePizza extends Pizza {
  constructor() {
    super();

    this.name = "NY Veggie Pizza";
    this.dough = "Thin Crust Dough";
    this.sauce = "Plum Tomato Sauce";

    this.toppings.push("Shredded Mozzarella Cheese");
    this.toppings.push("Black Olives");
    this.toppings.push("Spinach");
    this.toppings.push("Eggplant");
  }

  cut(): void {
    console.log("Cutting the pizza into wedge slices");
  }
}

export abstract class PizzaStore {
  constructor() {}

  protected abstract createPizza(type: string): Pizza;

  public orderPizza(type: string): Pizza {
    const pizza: Pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}

export class NYPizzaStore extends PizzaStore {
  // Фабричный метод реализующий создание пицы для конкретного стора
  protected createPizza(item: string): Pizza {
    let pizza: Pizza | null = null;
    if (item === "cheese") {
      pizza = new NYStyleCheesePizza();
    } else if (item === "veggie") {
      pizza = new NYStyleVeggiePizza();
    } else if (item === "clam") {
      pizza = new NYStyleClamPizza();
    } else if (item === "pepperoni") {
      pizza = new NYStylePepperoniPizza();
    }
    return pizza!;
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza {
    let pizza: Pizza | null = null;

    if (item === "cheese") {
      pizza = new ChicagoStyleCheesePizza();
    } else if (item === "veggie") {
      pizza = new ChicagoStyleVeggiePizza();
    } else if (item === "clam") {
      pizza = new ChicagoStyleClamPizza();
    } else if (item === "pepperoni") {
      pizza = new ChicagoStylePepperoniPizza();
    }
    return pizza!;
  }
}

// Использование
const nyPizzaStore = new NYPizzaStore();
const nyPizza = nyPizzaStore.orderPizza("cheese");
nyPizza.prepare();
nyPizza.bake();
nyPizza.cut();
nyPizza.box();

// Ингридиенты

interface PizzaIngFactory {
  createDough(): Dough;
  createSause(): Sause;
  createCheese(): Cheese;
}

abstract class Dough {}
abstract class Sause {}
abstract class Cheese {}

class ThinCrustDough extends Dough {}
class MarinaraSause extends Sause {}
class ReggianoCheese extends Cheese {}

class NYPizzaIngFactory implements PizzaIngFactory {
  createCheese(): Cheese {
    return new ReggianoCheese();
  }
  createDough(): Dough {
    return new ThinCrustDough();
  }
  createSause(): Sause {
    return new MarinaraSause();
  }
}
