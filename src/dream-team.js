const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamSorted = '',
      teamUnsorted = '';
  if (members == null || !(members.constructor == Array))  {return false}

  members.forEach(member => {
      if (typeof(member) == 'string') {
        member=member.trim();
        teamUnsorted+=member[0]
      } 
  })

  teamSorted = teamUnsorted.split('').sort().join('').toUpperCase();
return (teamSorted);
}

module.exports = {
  createDreamTeam
};
