/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 1) {
        return true;
    }
    
    const pureS = s.toLowerCase().split('').filter((letter) => {
        return /[a-z0-9]/.test(letter);
    })
    
    if (pureS.length < 2) {
        return true;
    }
    
    for (let i = 0; i < (pureS.length - 1) / 2; i++) {
        if (pureS[i] !== pureS.slice(-(i + 1))[0]) {
            return false;
        }
    }
    
    return true;
};