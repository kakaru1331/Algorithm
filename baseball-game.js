var calPoints = function(ops) {
    var sum = 0;
    var validPoints = [];
    var curIdx = -1;
    var validPoint = 0;
    
    for (var i=0; i < ops.length; i++) {        
        if (ops[i] == 'C') {
            sum -= validPoints[curIdx];
            validPoints.pop(curIdx);
            curIdx--;
        } else if (ops[i] == 'D') {
            validPoint = validPoints[curIdx];
            sum += validPoint*2;
            validPoints.push(validPoint*2);
            curIdx++;
        }            
        else if (ops[i] == '+') {
            validPoint = validPoints[curIdx] + validPoints[curIdx-1];
            sum += validPoint;
            validPoints.push(validPoint);
            curIdx++;
        }
        else {
            validPoints.push(parseInt(ops[i]));
            curIdx++;
            sum += validPoints[curIdx];
        }
    }
    
    return sum;
};