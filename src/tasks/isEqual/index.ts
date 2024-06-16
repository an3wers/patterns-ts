// Функция принимает на вход объекты, которые содержат в себе примитивы, объекты и массивы.

// if array -> true
function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

type PlainObject<T = unknown> = {
  [k in string]: T;
};

// if object -> true
function isPlainObject(value: unknown): value is PlainObject {
  return (
    typeof value === "object" &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === "[object Object]"
  );
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}

/*
  Если значения в двух объектах равны массиву или объекту, то необходимо рекурсивно проверить дочерние значения,
  иначе просто проверяем значения на строгое равенство.
*/

function isEqual(lhs: PlainObject | [], rhs: PlainObject | []) {
  if (typeof lhs !== "object" && typeof rhs !== "object") {
    return lhs === rhs;
  }

  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
    // @ts-ignore
    const rightValue = rhs[key];

    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
}
