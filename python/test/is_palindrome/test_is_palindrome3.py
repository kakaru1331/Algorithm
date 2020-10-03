import unittest

from src.is_palindrome.is_palindrome3 import is_palindrome

class TestIsPalindrome3(unittest.TestCase):

    def test_is_palindrome3(self):
        mockString = "A man, a plan, a canal: Panama"

        actual = is_palindrome(self, mockString)

        expected = True

        self.assertEqual(actual, expected, "It should return True")