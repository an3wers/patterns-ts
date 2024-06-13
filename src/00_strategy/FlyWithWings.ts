import { FlyBehavior } from "./types/fly";

class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I am flying...");
  }
}

export default FlyWithWings
