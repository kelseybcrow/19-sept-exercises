const btn = document.getElementById('btn');
const text = document.getElementById('text');
const input = document.getElementById('input');
const label = document.getElementById('label');

const btnHandler = () => {
  text.textContent = 'In cart';
  btn.classList.remove('pink');
  btn.classList.add('lightblue');
  label.textContent = 'Added to cart';
};

btn.addEventListener('click', btnHandler);

//////////////////
// lightbulb //
//////////////////

// window.addEventListener('DOMContentLoaded', function () {
//   console.log('hello');
//   lightbulb.classList.add('bulb-off');
// });

const lightbulb = document.querySelector('.lightbulb-off');

const bulbHandler = () =>
  lightbulb.className === 'lightbulb-off'
    ? lightbulb.classList.add('bulb-on')
    : lightbulb.classList.remove('bulb-on');

lightbulb.addEventListener('click', bulbHandler);

//////////////////////////////////////
// functions exercises //
//////////////////////////////////////

const salary = (pay, hours, days) => {
  return pay * hours * days;
};
console.log(salary(10, 8, 3));

const taxed_salary = (salary, tax) => salary * (1 - tax / 100);
console.log(taxed_salary(200, 0.8));

const max3 = (a, b, c) => {
  const nums = [a, b, c];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // console.log(i);
    if (nums[i] > max) max = nums[i];
  }
  return max;
};
console.log(max3(1, 2, 3));

const newMax3 = (a, b, c) => {
  const nums = [a, b, c];
  let max = nums[0];
  for (const num of nums) {
    if (num > max) max = num;
  }
  return max;
};
console.log(newMax3(1, 2, 3));

const spread3 = (a, b, c) => {
  const nums = [a, b, c];
  let max = nums[0];
  let min = nums[0];
  for (const num of nums) {
    if (num > max) max = num;
    if (num < min) min = num;
  }
  return max - min;
};
console.log(spread3(1, 5, 10));
