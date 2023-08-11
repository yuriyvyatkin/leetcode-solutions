/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let maxRight = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];
    arr[i] = maxRight;
    maxRight = Math.max(maxRight, current);
  }

  return arr;
};