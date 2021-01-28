package wordcount

import (
	"reflect"
	"testing"
)

func TestWordCount(t *testing.T) {
	sentence := "The quick brown fox jumped over the lazy dog."
	expect := map[string]int{"The": 1, "brown": 1, "dog.": 1, "fox": 1, "jumped": 1, "lazy": 1, "over": 1, "quick": 1, "the": 1}

	actual := WordCount(sentence)

	if !reflect.DeepEqual(actual, expect) {
		t.Errorf("WordCount() \nactual: %v, \nexpect: %v", actual, expect)
	}
}
