let case1 = console.log;
console.log(Number(case1), Boolean(case1), String(case1));

let case2 = { name: 'Maxim' };
console.log(Number(case2), Boolean(case2), String(case2));

let case3 = Symbol('key');
console.log(Number(case3), Boolean(case3), String(case3));

let case4 = Number;
console.log(Number(case4), Boolean(case4), String(case4));

let case5 = '';
console.log(Number(case5), Boolean(case5), String(case5));

let case6 = 0;
console.log(Number(case6), Boolean(case6), String(case6));

let case7 = -10;
console.log(Number(case7), Boolean(case7), String(case7));

let case8 = '-105';
console.log(Number(case8), Boolean(case8), String(case8));
