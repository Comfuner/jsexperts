function a1(x) { return Math.floor(x); }
var fn1 = function (cb) {
    if (cb === void 0) { cb = a1; }
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) { return sum + cb(num); }, 0);
};
console.log('case1: ' + fn1(undefined, 3.1, 7.9, 8.5));
console.log('case2: ' + fn1(function (x) { return x * x; }, 4, 7, 8));
//# sourceMappingURL=app.js.map