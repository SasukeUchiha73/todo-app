const longIncSubsequence = function(nums) {
    let track = new Array(nums.length).fill(0)
    let maxsize = 0

    for (let num of nums) {
        let i = 0
        let j = maxsize
        while (i !== j) {
            let mid = Math.floor((i + j) / 2)
            if (track[mid] < num) {
                i = mid + 1
            } else {
                j = mid
            }
        }
        if (i === maxsize){
            maxsize=maxsize+1
        }
        track[i] = num
        
    }
    return maxsize
    
};

// testcase1
let query = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(longIncSubsequence(query))
//answer 4