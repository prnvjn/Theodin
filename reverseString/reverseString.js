const reverseString = function(string) {
    let res = string.split("")
    res = res.reverse()
    res=res.join("")
    return res
};

module.exports = reverseString;
