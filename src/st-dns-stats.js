import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let obj = {};
  let domain
  for (let i = 0; i < domains.length; i++) {
    domain = domains[i].split('.').reverse();
    let x = '';
    for (let i = 0; i < domain.length; i++) {
      x += '.' + domain[i];
      if (obj[x]) {
        obj[x]++;
        console.log(obj);
      } else {
        obj[x] = 1;
        console.log(obj);
      }
    }
  }
  return obj;
}