import { QuackBehavior } from "./types/quack";

class Squeak implements QuackBehavior {
  quack(): void {
    console.log("I am squeaking...");
  }
}

export default Squeak;
