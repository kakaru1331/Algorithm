package wordcount

import (
	"strings"
)

// WordCount returns count of words in sentence
// in the form of map[string]int
func WordCount(s string) map[string]int {
	splitedS := strings.Split(s, " ")

	mapOfS := make(map[string]int)
	for _, elem := range splitedS {
		_, isExist := mapOfS[elem]

		switch isExist {
		case true:
			mapOfS[elem]++
		case false:
			mapOfS[elem] = 1
		}
	}

	return mapOfS
}
