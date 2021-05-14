// Visualization is of a mobile game where the user can jump to a cloud that is 0 but can not jump to a cloud that is 1
// The visualization uses an array of 1s and 0s to portray the clouds in the game. 
// Example: c = [0,0,1,0,1,0];

var c = [0, 0, 0, 1, 0, 0, 1, 0];


const jumpingOnClouds = (c) => {
    let count = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i] === 0) {
            if (c[i] === c[i + 1]) {
                count++;
                i++;
            }
        } else {
            count++;
        }
    }
    return count;
}

var result = jumpingOnClouds(c);
console.log(result);