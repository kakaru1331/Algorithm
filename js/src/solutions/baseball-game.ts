/**
 * calculate total point
 * @param ops
 * @returns result after calculate points
 */
function calPoints(ops: Array<string>): number {
    let sum = 0;
    const validPoints = [];
    let curIdx = -1;
    let validPoint = 0;
    
    for (let i=0; i < ops.length; i++) {        
        if (ops[i] == 'C') {
            sum -= validPoints[curIdx];
            validPoints.pop();
            curIdx--;
        } else if (ops[i] == 'D') {
            validPoint = validPoints[curIdx];
            sum += validPoint*2;
            validPoints.push(validPoint*2);
            curIdx++;
        } else if (ops[i] == '+') {
            validPoint = validPoints[curIdx] + validPoints[curIdx-1];
            sum += validPoint;
            validPoints.push(validPoint);
            curIdx++;
        } else {
            validPoints.push(parseInt(ops[i]));
            curIdx++;
            sum += validPoints[curIdx];
        }
    }
    
    return sum;
}

export { calPoints }