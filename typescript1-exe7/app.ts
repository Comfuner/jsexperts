function a1(x) {return Math.floor(x)}

const fn1 = (cb = a1, ...numbers: number[]): number => numbers.reduce(
    (sum: number, num: number) => sum + cb(num), 0);

console.log('case1: ' + fn1(undefined,3.1,7.9,8.5));
console.log('case2: ' + fn1((x: number): number => x * x, 4, 7, 8));
