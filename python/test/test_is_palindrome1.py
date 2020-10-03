import unittest

from src.is_palindrome1 import is_palindrome

class TestIsPalindrome1(unittest.TestCase):

    def test_is_palindrome1(self):
        mockString = "A man, a plan, a canal: Panama"

        actual = is_palindrome(self, mockString)

        expected = True

        self.assertEqual(actual, expected, "It should return True")