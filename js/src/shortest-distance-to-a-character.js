var shortestToChar = function(S, C) {
    var distanceArr = Array.of(S.length);
    var end_index = S.length-1;    
    var pre_offset = 0;
    var offset = 0;
    var distance;    
    
    while (true) {
        offset = S.indexOf(C, pre_offset);
        distanceArr[offset] = 0;
        
        if (offset == -1)
            break;
        
        distance = 1;
        for (var i=offset-1; i >= 0; i--) {
            if (distanceArr[i] < distance)
                break;

            distanceArr[i] = distance;
            distance++;
        }

        distance = 1;
        for (var i=offset+1; i <= end_index; i++) {
            if (distanceArr[i] < distance)
                break;

            distanceArr[i] = distance;
            distance++;
        }        
        
        pre_offset = offset+1;
    }
    
    return distanceArr;    
};