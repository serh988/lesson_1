const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumEven = 0;
let sumOdd = 0;

numbers.forEach(number => {
  if (number % 2 === 0) {
    sumEven += number;
  } else {
    sumOdd += number;
  }
});

const difference = Math.abs(sumEven - sumOdd);

console.log(`Сумма четных чисел: ${sumEven}`);
console.log(`Сумма нечетных чисел: ${sumOdd}`);
console.log(`Разница между суммой четных и нечетных чисел: ${difference}`);
