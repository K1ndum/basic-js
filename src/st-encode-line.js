import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arr = str.split('');
  let count = 1;
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i+1]) {
      count++;
    } else {
      if (count > 1) {
        array.push(count + '' + arr[i])
        count = 1;
      } else {
        array.push(arr[i]);
      }
    }
  }
  return array.join('');
}
