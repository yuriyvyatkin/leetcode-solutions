/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let zerosCount = 0;
    let length = arr.length - 1;
    
    // Шаг 1. Подсчитываем количество нулей,
    // для определения условно свободного места в конце массива,
    // так как его значения будут сдвинуты из-за дублирования нулей
    for (let i = 0; i <= length - zerosCount; i++) {
        if (arr[i] === 0) {
            // Учитываем граничный случай: если последний элемент массива равен нулю,
            // то сразу перемещаем его в конец, так как он не будет иметь места
            // для дублирования
            if (i === length - zerosCount) {
                arr[length] = 0;
                length--;
                break;
            }
            zerosCount++;
        }
    }
    
    let last = length - zerosCount;

    // Шаг 2. Перемещаем числа на свободное место,
    // определённое в предыдущем шаге,
    // дублируя нули
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