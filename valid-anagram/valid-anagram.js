/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const sortedS = s.split('').sort((a, b) => a.localeCompare(b)).join('');
    const sortedT = t.split('').sort((a, b) => a.localeCompare(b)).join('');
    
    return sortedS === sortedT;
};