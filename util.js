function appendZeros(string,n){ // append n zeroes to a string
    string = "" + string;
    for( var i = 0;i<n;i++ ){
        string += "0";
    }
    return string;
};
// multiply two integer strings. 
//Length of second argiment should not be greater than 14. 
//Used to multiple any length integer string by a single digit 
function mulBy(a, b) { 
    a = "" + a;
    b = "" + b;
    if (parseInt(a) == 0 || parseInt(b) == 0) {
        return 0;
    }
    else {
        var ans = a;
        for (var i = 1; i < b; i++) {
            ans = sum(ans, a);
        }
        return ans;
    }
};
