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
        if (strs[i] === '') {
            return '';
        };

        const firstS = strs[i];
        const secondS = strs[i + 1];
        
        const comparisonSubstringLength = result.length || firstS.length;
        
        for (let j = 0; j < comparisonSubstringLength; j++) {
            if (firstS[j] === secondS[j] && j < result.length) {
                if (firstS[j] === result[j]) {
                    continue;
                } else {
                    result = result.slice(0, j);
                    break;
                }
            } else if (firstS[j] === secondS[j]) {
                result.push(firstS[j]);
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
    
    return result.join('');
};
