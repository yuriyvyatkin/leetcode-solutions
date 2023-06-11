/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 1) {
        return true;
    }
    
//     const pureS = s.toLowerCase().split('').filter((letter) => {
//         return /[a-z0-9]/.test(letter);
//     })
    
//     if (pureS.length < 2) {
//         return true;
//     }
    
    // for (let i = 0; i < (pureS.length - 1) / 2; i++) {
    //     if (pureS[i] !== pureS.slice(-(i + 1))[0]) {
    //         return false;
    //     }
    // }
    
    let i = 0;
    let j = s.length - 1;
    
    do {
        const iIsAlphanum = /[a-z0-9]/i.test(s[i]);
        const jIsAlphanum = /[a-z0-9]/i.test(s[j]);
        
        if (!iIsAlphanum) {
            i += 1;
        }
        
        if (!jIsAlphanum) {
            j -= 1;
        }
        
        if (iIsAlphanum && jIsAlphanum) {
            if ((s[i].toLowerCase() !== s[j].toLowerCase())) {
                return false;
            }
            
            i += 1;
            j -= 1; 
        }
    } while (i < j)
    
    return true;
};