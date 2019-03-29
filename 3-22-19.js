// write a function that takes in a list of numbers and will return another list that fills in the numbers missing so it increases by 1 between eah index.
function fillInNumbers(numbers){
    let results = [];
    for (i=numbers[0]; i<= numbers.length -1; i++){
        results.push(i)
    }    
        return results;
}
fillInNumbers([1,3,5,6,7,8]);

// towns population is p0 at beginning of each year. pop increases by percent per year and (aug) new inhabitants per year come to live in the town. how many years does the town need to see its pop greater or equal to p inhabitants.
// need to get the math working right.
function nb_year(p0,percent, aug, p,){
    for (i = 0; i <= p ; i++){
        let years = p0 * (percent+1) + aug; 
        return years;
    }
}
nb_year(1500, 5, 100, 5000);

// while currentPop < targetPop
//     currentPop = currentPop * (1 + percent) + aug
//     years++

// function which accepts an array of integers and n as a number. the function should calculate the maximum sum (n) of consecutive elements in the array

function maxSumOfArray(nums, n){
    // set variables for both the final sum and temp sum that will be checked each time to see which is greater
    sum = 0;
    tempSum = 0;
    // for loop to go through the indexes of the array
    for (i = 0; i < n-1; i++){
        // add the sums of consecutive numbers and assign them to the temp sum
        tempSum += nums[i];
    }
    // second for loop to check tempSum against Sum and return the higher value
    for( i = n - 1; i < nums.length; i++){
        // sum of 
        tempSum += nums[i];
        // checks the values of tempSum and sum and sets the higher value to sum
        if (tempSum > sum){
            // sets higher value to sum
            sum = tempSum;
        }
        
        tempSum -= numfs[i-n+1]
    }
    return sum;
}
maxSumOfArray([1,2,5,2,8,1,5], 2);

// write a function that accepts an array and a number, checks if the integer resides inside the array and return the index value.
// if the number is not found return -1

function isThere (arr, num){
    for (let i=0; i <= arr.length; i++){
        if (arr[i] === num){
            return sum;
        } 
    }
    return -1;
}
isThere([1,2,2,3,4,5,5,6], 2);