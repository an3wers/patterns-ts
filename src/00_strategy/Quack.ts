import { QuackBehavior } from "./types/quack";

class Quack implements QuackBehavior {
  quack(): void {
    console.log("I am quacking...");
  }
}

export default Quack;
