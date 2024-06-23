let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop: any) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // значение по умолчанию
    }
  },
  set(target, prop: any, value: number) {
    if (typeof value === "number") {
      target[prop] = value;
      return true;
    } else {
      console.log("Invalid property");
      return false;
    }
  },
});
