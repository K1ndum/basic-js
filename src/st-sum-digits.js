import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let arr = (n + "").split(''); 
  let sum = 0;
  let x;
  for (let i = 0; i < arr.length-1; i++) {
    sum = (+arr[i]) + (+arr[i+1]);
    if (sum >= 10) {
      x = (sum + '').split('');
      sum = (+x[0]) + (+x[1]);
    }
    arr[i+1] = sum;
  }
  return sum;
}