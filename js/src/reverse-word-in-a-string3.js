var reverseWords = function(s) {
    var palindrome = [];
    var str_arr = s.split(' ');

    str_arr.forEach(x => {
        var tmp = x.split('').reverse().join('');
        palindrome.push(tmp);
    });

    palindrome = palindrome.join(' ')
    
    return palindrome;
};