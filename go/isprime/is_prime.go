package isprime

// IsPrime returns boolean depending on whether parameters are prime number
func IsPrime(n int) bool {
	for x := 2; x*x <= n; x++ {
		if n%x == 0 {
			return false
		}
	}

	return true
}
