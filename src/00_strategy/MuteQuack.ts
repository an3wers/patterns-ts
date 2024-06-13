import { QuackBehavior } from "./types/quack";

class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log("I do not quack!");
  }
}

export default MuteQuack;
