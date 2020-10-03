import re

def is_palindrome(self, targetString: str) -> bool:
    lowerString = targetString.lower()
    
    filteredString = re.sub('[^a-z0-9]', '', lowerString)

    return filteredString == filteredString[::-1]