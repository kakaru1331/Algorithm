var matrixReshape = function(nums, r, c) {
    var nums_row = nums.length;
    var nums_col = nums[0].length;
    var queue = [];    
    
    if (nums_row*nums_col != r*c)
        return nums;
    
    for (var i=0; i < nums_row; i++) {        
        for (var j=0; j < nums_col; j++) {
            queue.unshift(nums[i][j]);
        }
    }
    
    var reshaped_matrix = [];
    for (var x=0; x < r; x++) {
        reshaped_matrix.push(new Array(c));
    }
    
    for (var k=0; k < r; k++) {
        for (var l=0; l < c; l++) {
            reshaped_matrix[k][l] = queue.pop();
        }
    }    
    
    return reshaped_matrix;
};