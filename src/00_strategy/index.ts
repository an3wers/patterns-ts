import Duck from "./Duck";
import FlyNoWay from "./FlyNoWay";
import MallardDuck from "./MallardDuck";
import RubberDuck from "./RubberDuck";

const mallard: Duck = new MallardDuck();
const rubber: Duck = new RubberDuck();

mallard.display();
mallard.performFly();
mallard.performQuack();

rubber.setFlyBehavior(new FlyNoWay())
rubber.display();
rubber.performFly();
rubber.performQuack();
