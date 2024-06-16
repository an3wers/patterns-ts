// Получить все ключи объекта

const obj = { some_val: "Undefined", other_val: true };

Object.keys(obj).forEach((k) => console.log(">> key >> ", k));
console.log(Object.hasOwn(obj, "some_val"));
console.log(Object.hasOwn(obj, "some_va"));
