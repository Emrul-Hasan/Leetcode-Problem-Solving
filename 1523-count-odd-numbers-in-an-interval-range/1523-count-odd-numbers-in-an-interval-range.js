/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
      if (high & 1 && low & 1) {
        const difference = (high-low-2)/2
        return difference + 2
    } 
    else if (!(high & 1) && !(low & 1)) {
        const difference = (high-low)/2
        return difference
    }
    else {
        const difference = (high-low-1)/2
        return difference + 1
    }
};

console.log(countOdds(3,7));