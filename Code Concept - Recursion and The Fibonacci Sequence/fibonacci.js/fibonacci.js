// Fibonacci Sequence
// 1,1,2,3,5,8,13,21,34 etc...

// Output the first N elements of the Fibonacci Sequence
// Write a function to output the first N elements of the Fibonacci Sequence

// Recursion: Call a function from inside its own body

// fib(8) = fib(7) + fib(6)
// fib(3) = fib(2) + fib(1)
// fib(n) = fib(n-1) + fib(n-2)

function fibonacci(n)
{
    if(n==1 || n==2)
    {
        return(1)
    }
    else
    {
        return(fibonacci(n-1) + fibonacci(n-2))
    }
}
console.log(fibonacci(2))