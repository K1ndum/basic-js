import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let str;
  let domain = email.match(/@\w{1,}.\w{1,}.\w{1,}|@\w{1,}.\w{1,}/)[0];
  domain = domain.split('').reverse();
  domain.pop();
  return (domain.reverse().join(''));
}
