/**
Find the longest subarray  whose elements sum is equal to K
Example: 
Input :[1,5,4,1,3,2,1,3,8,1,9]
K= 10
Output = [1,3,2,1,3]
**/


function checkInArray (arr, sum) {
    let sumOfArr = arr.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
    return sumOfArr === sum;
  }
  
  
  const input = [1,5,4,1,3,2,1,3,8,1,9];
  const k = 10;
  
  let maxSubArrLength = 1;
  let subArr = [];
  
  while (maxSubArrLength < input.length) {
    for (let j = 0; j + maxSubArrLength < input.length; j++) {
        let slicedArr = [];
          let isSumEqual = false;
           slicedArr = input.slice(j, j + maxSubArrLength + 1 );
           isSumEqual = checkInArray(slicedArr, k);
           if (isSumEqual) {
              subArr.push(slicedArr);
           }
      }
      maxSubArrLength += 1;
  }
  
  maxSubArrLength = 0;
  subArr.forEach (element => {
      maxSubArrLength = (element.length > maxSubArrLength) ? element.length : maxSubArrLength
  })
  
  console.log(" Longest =",maxSubArrLength)