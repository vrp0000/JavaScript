/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

let input  = [2,7,11,15];

console.log("Solution 1: ", twoSums1(input, 9));
console.log("Solution 2: ", twoSums2(input, 9));

// Solution 1
//Time Complexity = O(n^2) and Space Complexity = O(1)

function twoSums1(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

//Solution 2
//Time Complexity = O(n) and Space Complexity = O(n)

function twoSums2(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}
