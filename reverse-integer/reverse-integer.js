/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = Math.sign(x);
    const reversedNum = Number(String(Math.abs(x)).split('').reverse().join('')) * sign;
    
    if (reversedNum < Math.pow(-2, 31) || reversedNum > (Math.pow(2, 31) - 1)) {
        return 0;
    }
    
    return reversedNum;
};