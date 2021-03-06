import { add, sub, multiply, divide } from './modules/calculator';
import { reverseString } from './modules/reverseString';
import { capitalize } from './modules/capitalizeWord';
import { analayzeArray } from './modules/analyzeArray';

/* testing capitalazing function  */

test('capitalaze, new york', () => {
	expect(capitalize('new york')).toBe('New york');
});

/* testing calculator functions */

test('1 plus 1 equal 2', () => {
	expect(add(1, 1)).toBe(2);
});

test('2-1 equals 1', () => {
	expect(sub(2, 1)).toBe(1);
});

test('2x2 equal 4', () => {
	expect(multiply(2, 2)).toBe(4);
});

test('14 divided by 2 equal 7', () => {
	expect(divide(14, 2)).toEqual(7);
});

/* testing reverse string function */

test('reverse hello there, to--> ereht olleh', () => {
	expect(reverseString('hello there')).toEqual('ereht olleh');
});

test('reverse numbers and sympols', () => {
	expect(reverseString('123# ABC!')).toEqual('!CBA #321');
});

/* testing analayzeArray function */

test('analayze [2,4,7,3,11,3]', () => {
	expect(analayzeArray([2, 4, 7, 3, 11, 3])).toEqual({
		average: 5,
		minNumber: 2,
		maxNumber: 11,
		length: 6,
	});
});

test('analayze [1,3,5,7]', () => {
	expect(analayzeArray([1, 3, 5, 7])).toMatchObject({ average: 4 });
});
