/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    }
    
    let result = [];
    
    for (let i = 0; i <= strs.length - 2; i++) {
        let shortS, longS = '';
        
        if (strs[i].length === 0 || strs[i + 1].length === 0) {
            return '';
        }
        
        if (strs[i].length < strs[i + 1].length) {
            shortS = strs[i];
            longS = strs[i + 1];
        } else {
            shortS = strs[i + 1];
            longS = strs[i];
        }
        
        shortS = shortS.split('');
        longS = longS.split('');
        
        console.log(shortS)
        console.log(longS)
        
        const comparisonSubstringLength = result.length || shortS.length;
        
        for (let j = 0; j < comparisonSubstringLength; j++) {
            // if (j < result.length) {
            //     if (shortS[j] !== result[j]) {
            //         result = result.slice(0, j);
            //         break;
            //     } else if (shortS[j] === longS[j]) {
                    
            //     }
            // }
            
            if (shortS[j] === longS[j] && j < result.length) {
                console.log('test1');
                if (shortS[j] === result[j]) {
                    continue;
                } else {
                    result = result.slice(0, j);
                    break;
                }
            } else if (shortS[j] === longS[j]) {
                console.log('test2');
                result.push(shortS[j]);
                continue;
            } else {
                console.log('test3');
                console.log(j)
                result = result.slice(0, j);
                if (result.length === 0) {
                    return '';
                }
                break;
            }
        }    
    }
    
    return result.filter(Boolean).join('');
};
