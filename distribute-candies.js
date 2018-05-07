var distributeCandies = function(candies) {
    var portion = candies.length / 2;
    var dif_kind_of_candies = 0;
    var pre_candy;
    
    candies.sort();
    
    for (var i=0; i<candies.length; i++) {
        if (pre_candy != candies[i]) {
            pre_candy = candies[i];
            dif_kind_of_candies++;
        }
        
        if (portion == dif_kind_of_candies)
            break;
    }
    
    return dif_kind_of_candies;
};