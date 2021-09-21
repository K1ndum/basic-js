import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let array = [].concat(arr);
  array.sort(function(a, b) {
    let x;
    if (b !== -1) {
      x = a - b;
    }
    return x;
  });
  let arrayNew = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) {
      arrayNew.push(array[i]);
    }
  }
  array = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      array.push(arr[i]);
    } else {
      array.push(arrayNew[count]);
      count++;
    }
  }
  return array;
}
