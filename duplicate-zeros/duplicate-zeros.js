/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let zerosCount = 0;
    let length = arr.length - 1;
    
    // Подсчитываем количество нулей.
    for (let i = 0; i <= length - zerosCount; i++) {
        if (arr[i] === 0) {
            // Учитываем граничный случай: если последний элемент массива равен нулю.
            if (i === length - zerosCount) {
                arr[length] = 0;
                length--;
                break;
            }
            zerosCount++;
        }
    }
    
    let last = length - zerosCount;

    // Дублируем нули, начиная с конца.
    for (let i = last; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[i + zerosCount] = 0;
            zerosCount--;
            arr[i + zerosCount] = 0;
        } else {
            arr[i + zerosCount] = arr[i];
        }
    }
};