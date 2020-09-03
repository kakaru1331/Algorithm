var flipAndInvertImage = function(A) {
    var row = A.length;
    var col = A[0].length;
    var arr = [];
    var arr_in_arr = [];
    
    for (var i=0; i<row; i++) {        
        for (var j=col-1; j>=0; j--) {			
            if (A[i][j] == 0)
                arr_in_arr.push(1);   
            else
                arr_in_arr.push(0);
        }
        arr.push(arr_in_arr);
		arr_in_arr = [];
    }
    
    return arr;
};