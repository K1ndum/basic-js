import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1;
  }
  let arr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    if (str == true) {
      arr.push('true');
    } else if ((str == null)) {
      arr.push('null');
    } else {
      arr.push(str);
    }
    if(options.addition !== undefined) {
      arr[i] += options.addition
      if (options.additionRepeatTimes !== undefined) {
        for (let j = 1; j < options.additionRepeatTimes; j++) {
          if (options.additionSeparator !== undefined) {
            arr[i] += options.additionSeparator + options.addition;
          } else {
            arr[i] += '|' + options.addition;
          }
        }
      }
    }
  }
  console.log(arr)
  if (options.separator == undefined) {
    return arr.join('+');
  } else {
    return arr.join(`${options.separator}`);
  }
}

