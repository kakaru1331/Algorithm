import unittest

from src.two_sum.two_sum import two_sum

class TestTwoSum(unittest.TestCase):

    def test_two_sum(self):
        mockArray = [2,7,11,15]
        target = 9
        expecetedIndices = [0, 1]

        self.assertEqual(two_sum(self, mockArray, target), expecetedIndices, "It should return a list contains 0 and 1")