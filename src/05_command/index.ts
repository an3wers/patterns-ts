interface Command {
  execute(): void;
}

class Light {
  on() {}
  off() {}
}

class LightOnCommand implements Command {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute(): void {
    this.light.on();
  }
}

class SimpleRemoteControl {
  slot: Command | null = null;
  constructor() {}
  setCommand(command: Command) {
    this.slot = command;
  }
  buttonWasPressed() {
    if (this.slot) this.slot.execute();
  }
}

const simpleRemoteControl = new SimpleRemoteControl();
simpleRemoteControl.setCommand(new LightOnCommand(new Light()));
simpleRemoteControl.buttonWasPressed();
