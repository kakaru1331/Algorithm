var numJewelsInStones = function(J, S) {
  var count = 0;
  var arrJ = J.split('');
  
  for (let i=0; i<arrJ.length; i++) {
      var jewel = J[i];      
      var jewelIndex = S.indexOf(jewel);        
      
      if (jewelIndex == -1) {
          continue;
      } else {
          count++;
          jewelIndex++;
          
          for (true; jewelIndex <= S.length; jewelIndex++) {
              if (jewel == S[jewelIndex]) {
                  count++;
              }
          }
      }        
  }
  
  return count;
};