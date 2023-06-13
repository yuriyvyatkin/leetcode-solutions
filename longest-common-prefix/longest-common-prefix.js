/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    }
    
    // if (strs.some((item) => item === '')) {
    //     return '';
    // }
    
    let result = '';
    
    for (let i = 0; i <= strs.length - 2; i++) {
        if (strs[i] === '') {
            return '';
        };
        
        let shortS, longS = '';
        
        if (strs[i].length < strs[i + 1].length) {
            shortS = strs[i];
            longS = strs[i + 1];
        } else {
            shortS = strs[i + 1];
            longS = strs[i];
        }
        
        // shortS = shortS.split('');
        // longS = longS.split('');
        
        const comparisonSubstringLength = result.length || shortS.length;
        
        for (let j = 0; j < comparisonSubstringLength; j++) {
            if (shortS[j] === longS[j] && j < result.length) {
                if (shortS[j] === result[j]) {
                    continue;
                } else {
                    result = result.slice(0, j);
                    break;
                }
            } else if (shortS[j] === longS[j]) {
                result += shortS[j];
                // result.push(shortS[j]);
                continue;
            } else {
                result = result.slice(0, j);
                if (result.length === 0) {
                    return '';
                }
                break;
            }
        }    
    }
    
    return result;
};
