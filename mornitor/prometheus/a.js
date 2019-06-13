var a=74.925; b=74.935

Number.prototype.toFixed = function (s) {
        var times = Math.pow(10, s);
        var des = this * times + 0.5;
        des = parseInt(des, 10) / times;
        return des + '';
}
console.log(a,b,a.toFixed(2),b.toFixed(2))

console.log(a,b,a.toFixed(2),b.toFixed(2))
