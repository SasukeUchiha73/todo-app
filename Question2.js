const twoSum = (nums, target) =>{
    let mapA={}
    
    for(let i=0;i<nums.length;i++){
            if(nums[i] in mapA){
                
                return [mapA[nums[i]],i]
            }else{
                mapA[target-nums[i]]=i
            }
    }
    return [0,0]

};

// testcase1
let query = [2,7,11,15]
let target = 9
console.log(twoSum(query,target))
//answer 4