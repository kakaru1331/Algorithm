/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x === 0)
      return x;
  
  let strX = x.toString();    
  let arrayX = strX.split('');
  let shiftedCharacter = '';
  
  if (arrayX[0] === "0" || arrayX[0] === "-") {
      shiftedCharacter = arrayX.shift();
  }
  
  arrayX.reverse();
  
  if ("-" === shiftedCharacter) {
      arrayX.unshift(shiftedCharacter);
  }
  
  let reverseStrX = arrayX.join('');
  let reverseX = parseInt(reverseStrX);
  
  const SAFE_MIN_INTEGER = Math.pow(-2, 31);
  const SAFE_MAX_INTEGER = Math.pow(2, 31) - 1;
  
  if (reverseX < SAFE_MIN_INTEGER || reverseX > SAFE_MAX_INTEGER)
      return 0;
  
  return reverseX;
};