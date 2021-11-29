function analayzeArray(numbers) {
	let length = numbers.length;

	let minNumber = numbers.reduce((total, num) => {
		if (total > num) total = num;
		return total;
	});
	let maxNumber = numbers.reduce((total, num) => {
		if (total < num) total = num;
		return total;
	});

	let average = numbers.reduce((a, b) => a + b) / length;
	average = Math.trunc(average);

	return { average, minNumber, maxNumber, length };
}

export { analayzeArray };
