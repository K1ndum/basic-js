import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let num = n + '';
  num = num.split('');
  let now = 0;
  let max = 0;
  for (let i = 0; i < num.length; i++) {
    let arr = [].concat(num);
    arr[i] = '';
    now = +arr.join('');
    if (now > max) {
      max = now;
    }
  }
  return max;
}
