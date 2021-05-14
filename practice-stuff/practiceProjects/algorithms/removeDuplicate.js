// This is how to REMOVE duplicates from an array

let a = [1, 2, 5, 2, 1, 8];

let b = [];

for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
}

console.log(b);