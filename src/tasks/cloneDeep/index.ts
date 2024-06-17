/*
    Сделайте обработку для объектов и массивов;
    Не забудьте скопировать вложенные элементы массивов и свойства объектов.
*/

function cloneDeep<T extends object = object>(obj: T) {
  return (function _cloneDeep(
    item: T
  ): T | Date | Set<unknown> | Map<unknown, unknown> | object | T[] {
    // Handle:
    // * null
    // * undefined
    // * boolean
    // * number
    // * string
    // * symbol
    // * function
    if (item === null || typeof item !== "object") {
      return item;
    }

    // Handle:
    // * Date
    if (item instanceof Date) {
      return new Date(item.valueOf());
    }

    // Handle:
    // * Array
    if (item instanceof Array) {
      let copy = [];

      item.forEach((_, i) => (copy[i] = _cloneDeep(item[i])));

      return copy;
    }

    // Handle:
    // * Set
    if (item instanceof Set) {
      let copy = new Set();

      item.forEach((v) => copy.add(_cloneDeep(v)));

      return copy;
    }

    // Handle:
    // * Map
    if (item instanceof Map) {
      let copy = new Map();

      item.forEach((v, k) => copy.set(k, _cloneDeep(v)));

      return copy;
    }

    // Handle:
    // * Object
    if (item instanceof Object) {
      let copy: object = {};

      // Handle:
      // * Object.symbol
      Object.getOwnPropertySymbols(item).forEach(
        (s) => (copy[s] = _cloneDeep(item[s]))
      );

      // Handle:
      // * Object.name (other)
      Object.keys(item).forEach((k) => (copy[k] = _cloneDeep(item[k])));

      return copy;
    }

    throw new Error(`Unable to copy object: ${item}`);
  })(obj);
}

export function simpleCloneDeep<T extends object = object>(obj: T) {
  let clone;

  // Если объект является массивом
  if (Array.isArray(obj)) {
    clone = obj.slice(); // создаем новый массив с элементами оригинала
    // Пробегаем все элементы массива
    for (let i = 0; i < clone.length; i++) {
      clone[i] = cloneDeep(clone[i]); // рекурсивно копируем вложенные объекты/массивы
    }
  }
  // Если объект является литеральным объектом
  else if (typeof obj === "object" && obj !== null) {
    clone = { ...obj }; // создаем новый объект с теми же свойствами, что и оригинал
    // Пробегаем все свойства объекта
    for (let prop in clone) {
      if (clone.hasOwnProperty(prop)) {
        clone[prop] = cloneDeep(clone[prop]); // рекурсивно копируем вложенные объекты/массивы
      }
    }
  } else {
    return obj; // если аргумент не массив и не объект, просто возвращаем его же
  }

  return clone;
}

export default cloneDeep;
