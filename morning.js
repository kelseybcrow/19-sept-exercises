const number = Number(prompt('Seat number?'));
// number = 22
// 38
const row = Math.floor(number / 10);
// 22/10 = 2.2 -> 2
// row = 2
// 38/10 = 3.8 -> 3
// row = 3
const letterOfRow = String.fromCharCode(65 + row);
// 65 = A, 66 = B, etc.
// 65 + 2 = 67 -> C
// 65 + 3 = 68 -> D
const column = number % 10;
// 22 % 10 = 2
// 38 % 10 = 8
alert(letterOfRow + column);
// C2
// D8
1;

const year = Number(prompt('Enter a year: '));
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      document.write(year + ' is a leap year');
    } else {
      document.write(year + ' is not a leap year');
    }
  } else {
    document.write(year + ' is a leap year');
  }
} else {
  document.write(year + ' is not a leap year');
}

const salary = (pay, hours, days) => {
  return pay * hours * days;
};

const taxed_salary = (salary, tax) => salary * tax;
