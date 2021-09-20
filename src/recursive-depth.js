import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr, deep = 1, arrDeep = []) {
      arrDeep.push(deep);
      deep++;
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
          this.calculateDepth(arr[i], deep, arrDeep);
        } 
      }
    return Math.max(... arrDeep);
  }
}

let a = new DepthCalculator();

a.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]);
