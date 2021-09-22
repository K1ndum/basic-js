import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor (value) {
    this.value = value;
  }

  encrypt() {
    let str = arguments[0];
    let keyword = arguments[1];
    if (str == undefined || keyword== undefined) {
      throw new Error("Incorrect arguments!");
    }
    let lang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arr = lang.toUpperCase().split('');
    let strArr = str.toUpperCase().split('');
    let keywordArr = keyword.toUpperCase().split('');
    let count = 0;
    let codeWordArr = [];
    for (let i = 0; i < strArr.length; i++) {
      if (arr.indexOf(strArr[i]) !== -1) {
        if (count >= keywordArr.length) {
          count = 0;
        }
        let indexKey = arr.indexOf(keywordArr[count]);
        count++;
        let indexStr = arr.indexOf(strArr[i]);
        let code = indexKey + indexStr;
        if (code >= 26) {
          code = code - 26;
        }
        codeWordArr.push(arr[code]);
      } else {
        codeWordArr.push(strArr[i]);
      }
    }
    if (this.value == true || this.value == undefined) {
      return codeWordArr.join('');
    } else {
      return codeWordArr.reverse().join('');
    }


  }
  decrypt() {
    let str = arguments[0];
    let keyword = arguments[1];
    if (str == undefined || keyword == undefined) {
      throw new Error("Incorrect arguments!");
    }
    let lang = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arr = lang.toUpperCase().split('');
    let strArr = str.toUpperCase().split('');
    let keywordArr = keyword.toUpperCase().split('');
    let count = 0;
    let codeWordArr = [];
    for (let i = 0; i < strArr.length; i++) {
      if (arr.indexOf(strArr[i]) !== -1) {
        if (count >= keywordArr.length) {
          count = 0;
        }
        let indexKey = arr.indexOf(keywordArr[count]);
        count++;
        let indexStr = arr.indexOf(strArr[i]);
        let code = indexStr - indexKey;
        if (code < 0) {
          code = code + 26;
        }
        codeWordArr.push(arr[code]);
      } else {
        codeWordArr.push(strArr[i]);
      }
    }
    if (this.value == true || this.value == undefined) {
      return codeWordArr.join('');
    } else {
      return codeWordArr.reverse().join('');
    }
  }
}
