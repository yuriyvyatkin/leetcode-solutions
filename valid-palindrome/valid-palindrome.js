/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 1) {
        return true;
    }
    
    const pureS = s.toLowerCase().split('').filter((letter) => {
        const letterCode = letter.charCodeAt(0);
        console.log(letterCode)
        if ((letterCode < 97 || letterCode > 122) && (letterCode < 48 || letterCode > 57)) {
            return false;
        }
        
        return true;
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