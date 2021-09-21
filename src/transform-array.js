import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arrR = [].concat(arr);
  let array = [];
  for (let i = 0; i < arrR.length; i++) {
    if (arrR[i] == '--double-prev') {
      arrR[i] = arrR[i-1];
    } else if (arrR[i] == '--double-next') {
      arrR[i] = arrR[i+1];
    } else if (arrR[i] == '--discard-prev') {
      arrR[i-1] = '';
      arrR[i] = '';
    } else if (arrR[i] == '--discard-next') {
      arrR[i+1] = '';
      arrR[i] = '';
    }
  }
  arrR.map(a => (a !== '' && a !== undefined) ? array.push(a): 0);
  return array;
}
