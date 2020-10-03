import collections

def is_palindrome(self, targetString: str) -> bool:
    stringDeque: Deque = collections.deque()
    
    for character in targetString:
        if character.isalnum():
            stringDeque.append(character.lower())
    
    while len(stringDeque) > 1:
        if stringDeque.popleft() != stringDeque.pop():
            return False
    
    return True