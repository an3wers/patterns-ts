interface Command {
  execute(): void;
  undo(): void;
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
  undo(): void {}
}

class LightOffCommand implements Command {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute(): void {
    this.light.off();
  }
  undo(): void {}
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

class noCommand implements Command {
  execute(): void {
    console.log("execute no command");
  }
  undo(): void {
    console.log("undo no command");
  }
}

class RemoteControl {
  onCommands: Command[] = [];
  offCommands: Command[] = [];
  noCommand: Command;

  constructor() {
    // initialize
    this.noCommand = new noCommand();
    for (let i = 0; i <= 7; i++) {
      this.onCommands[i] = this.noCommand;
    }
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
  }

  offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
  }
}
