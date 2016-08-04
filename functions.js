function sum(a,b) {
     a = "" + a;
     b = "" + b;

    var arr1 = a.split('');
    var arr2 = b.split('');

    var i = arr1.length - 1;
    var j = arr2.length - 1;

    var sum = "";
    var carry = 0;
    while (i > -1 || j > -1) {
        if (j == -1) {
            var tempSum = parseInt(arr1[i]) + carry;
            sum = (tempSum % 10) + sum;
            carry = Math.floor(tempSum / 10);
            i--; 
        }
        else if (i == -1) {
            var tempSum = parseInt(arr2[j]) + carry;
            sum = (tempSum % 10) + sum;
            carry = Math.floor(tempSum / 10);
            j--; 
        }
        else{
            var tempSum = parseInt(arr1[i]) + parseInt(arr2[j]) + carry;
            sum = (tempSum % 10) + sum;
            carry = Math.floor(tempSum / 10);
            i--; j--;
        }
    }
    if (carry != 0) sum = "" + carry + sum;
    console.log(sum);
    return sum;
};

function mul(a, b) {
    if (b > a) {
        var c = a;
        a = b;
        b = c;
    }
    a = "" + a;
    b = "" + b;

    var bArr = b.split('');
    var ans = 0;

    bArr.forEach(function (value, i) {
        var tempValue = mulBy(a, value);
        tempValue = appendZeros(tempValue, bArr.length - i - 1);
        ans = sum(ans, tempValue);
    });
    return ans;
};
