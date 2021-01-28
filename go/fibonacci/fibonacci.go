package fibonacci

import "fmt"

// Fibonacci returns fibonacci number using memo
func Fibonacci(n int, memoized []int) int {
	if n <= 0 {
		return 0
	} else if n == 1 {
		return 1
	} else if memoized[n] > 0 {
		return memoized[n]
	}

	memoized[n] = Fibonacci(n-1, memoized) + Fibonacci(n-2, memoized)

	return memoized[n]
}

// PrintFibonacci prints All fibonacci number up to n
func PrintFibonacci(n int) {
	memo := make([]int, n+1)

	for i := 1; i <= n; i++ {
		Fibonacci(i, memo)
		fmt.Printf("%d: %v\n", i, Fibonacci(i, memo))
	}
}

// Fib returns fibonacci number
func Fib(n int) int {
	if n <= 0 {
		return 0
	} else if n == 1 {
		return 1
	}

	return Fib(n-1) + Fib(n-2)
}

// PrintFib prints All fibonacci number up to n
func PrintFib(n int) {
	for i := 1; i <= n; i++ {
		fmt.Printf("%d: %v\n", i, Fib(i))
	}
}
