import FlyWithWings from "./FlyWithWings";
import Quack from "./Quack";
import { FlyBehavior } from "./types/fly";
import { QuackBehavior } from "./types/quack";

abstract class Duck {
  private flyBehavior: FlyBehavior;
  private quackBehavior: QuackBehavior;

  constructor() {
    // default behaviour
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  public abstract display(): void;

  public performFly() {
    this.flyBehavior.fly();
  }

  public performQuack() {
    this.quackBehavior.quack();
  }

  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }

  public swim() {
    console.log("All ducks float, even decoys!");
  }
}

export default Duck;
