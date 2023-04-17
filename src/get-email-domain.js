const { NotImplementedError } = require('../extensions/index.js');

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
function getEmailDomain(email) {
  let at = '@';
    for (let i=0; i<email.length; i++) {
      if (email[i]==at) {
        index = i;
      }
  }
  
  domain = email.slice(index+1, email.length+1);
  return domain;
}

module.exports = {
  getEmailDomain
};
