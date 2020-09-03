var selfDividingNumbers = function(left, right) {
    var numArray = [];
    var str = '';
    var strLeng = 0;
    
    for (currentNum=left; currentNum <= right; currentNum++) {
        str = currentNum.toString();       
        
        if (str.includes('0'))
            continue;
        
        strLeng = str.length;
        for (var i=0; i < strLeng; i++) {
            let digit = parseInt(str[i]);
            
            if (currentNum % digit != 0)
                break;
            
            if (i == strLeng-1)
                numArray.push(currentNum);
        }
    }
    
    return numArray;
};