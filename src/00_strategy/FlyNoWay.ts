import { FlyBehavior } from "./types/fly";

class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("I can not fly");
  }
}

export default FlyNoWay;
