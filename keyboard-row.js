var findWords = function(words) {
    var top_line = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    var middle_line = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    var bottom_line = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    var set = new Set();
    var returnArr = [];
    
    words.forEach(word => {	
        set.clear();
        var tmp = word.toLowerCase();

        for (s of tmp) {
            if (top_line.includes(s))
                set.add(1)

            if (middle_line.includes(s))
                set.add(2)

            if (bottom_line.includes(s))
                set.add(3)

            if (set.size > 1)
                return;
        }

        returnArr.push(word);
    });
    
    return returnArr
};