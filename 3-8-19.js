// const arr1 = [1,2,3,4]
// const arr2 = [2,3,4,5]
// function sumArray(arr1, arr2){
//     let arr1sq = 0;
//     let arr2cube = 0;
//     arr1.forEach(function(num){
//         arr1sq += (num ** 2)
//     });
//     arr2.forEach(function(num){
//         arr2cube += (num**3)
//     })
//     if (arr1sq > arr2cube){
//         return true;
//     } else{
//         return false;
//     }

// }
// sumArray(arr1,arr2)

function sumZero(array){
    let posNum = [];
    let negNum = [];
    array.forEach(function(num){
        if (num < 0) {
            negNum.push(num)
        } 
        else if (num > 0) {
            posNum.push(num)
        }
    });
    negNum.forEach(function(num){
        let numOpp = Math.abs(num);
        if (posNum.includes (numOpp)){
        return [num, numOpp];
        };
    console.log(numOpp);
    });

}
sumZero([-3,-2,-1,0,3,4,4,5])



function sumZero2(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j <arr.length; j++){
            let sum = arr[i] + arr[j];
            if (sum === 0){
                return [arr[1] + arr[j]];
            }
        }
    }
}
console.log(sumZero2(-3,-2,-1,0,1,2,3,4))