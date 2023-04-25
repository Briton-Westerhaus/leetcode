/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var ret = [];
    var exist = {};
    for(let i = 0; i < nums.length; i++){
        if(typeof(exist[target - nums[i]]) !== 'undefined') {
            ret.push(exist[target - nums[i]]);
            ret.push(i);
            return ret;
        }
        
        exist[nums[i]] = i;
    }
};