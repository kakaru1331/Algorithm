def is_palindrome(self, targetString: str) -> bool:
    stringArray = []
  
    for character in targetString:
        if character.isalnum():
            stringArray.append(character.lower())

    while len(stringArray) > 1:
        if stringArray.pop(0) != stringArray.pop():
            return False

    return True