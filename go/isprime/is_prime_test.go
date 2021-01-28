package isprime

import "testing"

func TestIsPrime(t *testing.T) {
	n := 6
	expect := false

	actual := IsPrime(n)

	if actual != expect {
		t.Errorf("IsPrime() = %t, expect %t", actual, expect)
	}
}
