var uniqueMorseRepresentations = function(words) {
    
  var morseCodeEnum = {
      'a' : ".-",
      'b' : "-...",
      'c' : "-.-.",
      'd' : "-..",
      'e' : ".",
      'f' : "..-.",
      'g' : "--.",
      'h' : "....",
      'i' : "..",
      'j' : ".---",
      'k' : "-.-",
      'l' : ".-..",
      'm' : "--",
      'n' : "-.",
      'o' : "---",
      'p' : ".--.",
      'q' : "--.-",
      'r' : ".-.",
      's' : "...",
      't' : "-",
      'u' : "..-",
      'v' : "...-",
      'w' : ".--",
      'x' : "-..-",
      'y' : "-.--",
      'z' : "--.."
  }
  var concatMorse = '';
  var morseCodeSet = new Set();
  
  for (let i=0; i<words.length; i++) {        
      var wordArr = words[i].split('');        
      
      for (let j=0; j<wordArr.length; j++) {
          var character = wordArr[j];
          
          concatMorse += morseCodeEnum[character];
      }        
      
      morseCodeSet.add(concatMorse);
      concatMorse = '';
  }
  
  return morseCodeSet.size;
};