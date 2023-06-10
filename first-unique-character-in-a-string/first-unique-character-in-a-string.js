/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const uniqueS = Array.from(new Set(s.split(''))).join('');
    
    for (let i = 0; i < uniqueS.length; i++) {
        let repetitions = 0;
        
        for (let j = 0; j < s.length; j++) {
            if (uniqueS[i] === s[j]) {
                repetitions += 1;
                
                if (repetitions === 2) {
                    break;
                }
            }
        }
        
        if (repetitions === 1) {
            return s.indexOf(uniqueS[i])
        }
    }
    
    return -1;
};