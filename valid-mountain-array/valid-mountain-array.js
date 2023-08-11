/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false;
    }
    
    if (arr[0] > arr[1]) {
        return false;
    }
    
    let track = 0;
    
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            return false;
        }
        
        if (arr[i] < arr[i - 1] && arr[i - 2] < arr[i - 1] && track == 0) {
            track = 1;

        }
        
        if (arr[i] > arr[i - 1] && track == 1) {
            return false;
        }
    }

    return track == 1;
};