console.log('test'.concat('test2', 'test3'));
console.log('test'.includes('e'));
console.log('test'.indexOf('y'));
console.log('test'.match('y'));
console.log('test'.replace('e', 'o'));
console.log('test'.slice(2, 3));
console.log('test'.split('e'));
console.log('test'.toLowerCase());
console.log('test'.toUpperCase());
console.log('test   '.trim());

console.log([1,2,3].concat([2,3,4]))
console.log([1,2,3].every((e) => e >= 1))
console.log([1,2,3].some((e) => e >= 1))
console.log([{a: 1},{a: 2}, {a: 3}].find((e) => e.a === 2))
