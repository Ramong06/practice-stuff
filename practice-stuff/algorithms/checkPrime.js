// Verifying a prime number
// A prime number is only divisible by  itself and 1.  So, This will run a while loop and increase by 1 every loop. 
// A While loop statement creates a loop that is executed while a specified condition is true. The loop will continue to run as long as the condition is true.
// It will only stop when the condition becomes false.JavaScript supports different kinds of loops: for - loops through a block of code a number of 
// times.

const isPrime = (n) => {
    // creates a variable called divisor to divide the number that goes where the n parameter is.
    var divisor = 2;

    // Runs while loop to check if divisor is less than n
    while (n > divisor) {
        // if n divided by divisor is equal to (===) 0 it will return false.
        if (n % divisor === 0) {
            return false;
        }
        // if n divided by divisor is NOT equal to (===) 0, it will add 1 to the divisor variable and return true.
        else
            divisor++;
    }
    return true;
}

console.log(isPrime(137));
console.log(isPrime(1057));
console.log(Math.sqrt(5));

// Math.sqrt function returns the square root of a number. example above ^
// A different way of verifying a Prime number is as following.

const isPrime2 = (n) => {
    //  creates another divisor variable and a limit variable that uses Math.sqrt to find the square root of the number that replaces n parameter.
    var divisor = 3;
    limit = Math.sqrt(n);

}