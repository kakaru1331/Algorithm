var findComplement = function(num) {
    var binary_str = num.toString(2); 
    var complement_num = 0;
    
    for (var i=0; i < binary_str.length; i++) {
        if (binary_str[i] == '0')
            complement_num += Math.pow(2, binary_str.length-i-1);         
    }
    
    return complement_num;    
};