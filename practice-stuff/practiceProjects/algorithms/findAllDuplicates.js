// Find all Duplicates within an array
// O(n) = Maximum number of calculations done to be equal to or not exceed the number within the array
// Want to loop through an array one time.

// This variable is being used in both solutions (functions)
let arr = [4, 3, 2, 7, 8, 2, 3, 1];

//First solution.  Slower solution because it loops through and moves numbers into a seperate array every time.
const findDuplicateOne = (arr) => {
    const dups = [];
    const compare = [];

    for (let num of arr) {
        if (!compare.includes(num)) {
            compare.push(num);
        } else {
            dups.push(num);
        }
    }
    return dups;
};

console.log(findDuplicateOne(arr));

// This is a faster big O(n) solution because it doesnt loop through as much, but it is less intuative. Meaning (in this case) less readability.
// This function marks the number that is not in the dups array as a negative number.
// .abs is absolute value. Which means how far a number is from 0 (i.e 5 and -5 are both 5 numbers away from 0)
const findDuplicateTwo = (arr) => { 
    const dups = [];
    let index;

    for (let i = 0; i < arr.length; i++) {
        index = Math.abs(arr[i]) - 1

        if (arr[index] < 0) {
            dups.push(index + 1)
        } else {
            arr[index] *= -1
        }
    }
    return dups;
}

console.log(findDuplicateTwo(arr));

 


