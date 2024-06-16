/*
Написать функцию на JS, которая принимает число и может вызываться бесконечно число раз, пока не будет вызвана без аргументов - тогда возвращается сумма переданных ранее чисел

console.log(add(9)(10)()) // 19
console.log(add(9)()) // 9
console.log(add()) // 0
*/

function add(num) {
  let sum = num || 0;

  if (num === undefined) return sum;

  return function innerAdd(nextNum) {
    if (nextNum === undefined) {
      return sum;
    } else {
      sum += nextNum;
      return innerAdd;
    }
  };
}

console.log(add(9)(10)()); // 19
console.log(add(9)()); // 9
console.log(add()); // 0
