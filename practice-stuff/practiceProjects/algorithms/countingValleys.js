// This is a solution is to solve the Counting Valleys problem in Hacker Rank
// path argument = U or D
// steps argument = how many steps the person took in either direction.
// *** O(n) is linear meaning the runtime grows as the input grows ***

// Steps
// 1. We need to split the given string s to track each step. Create a variable for each step:steps and split it into an array of substrings
// 2. We need a count of how many times Gary enters a valley during his hike. Create a variable for each valley entered:valleyCount
// 3. We need to keep track of Gary’s current sea level status. Create a variable for Gary’s current sea level:currentSeaLevel
// 4. We need to know the sea level status so that we can tell when he has left one valley and entered another. Create a variable forvalleyStatus
// 5. We need to look through each step in the substring steps and do some if/else statements depending on the currentSeaLevel and valleyStatus
// 6. We need to return the valley count after analyzing each step: Return valleyCount

var n = 8;
var s = "UDDDUDUU";

function countingValleys(n, s) {
let steps = s.split(",");
let valleyCount = 0;
let currentSeaLevel = 0;
let valleyStatus = false;
steps.forEach(step => {
  step === 'U' ? currentSeaLevel++ : currentSeaLevel--;
    if(currentSeaLevel < 0 && !valleyStatus) {
      valleyCount++;
      valleyStatus = true
    } else if(currentSeaLevel >= 0 && valleyStatus) {
      valleyStatus= false
    }
  })
    return valleyCount;
};

let result = countingValleys(n, s);
console.log(result);

    