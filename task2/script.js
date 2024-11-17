const numbers = [];

for (let i = -10; i <= 10; i++) {
	numbers.push(i);
}

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] < 0) {
		numbers.splice(i, 1);
		i--;
	}
}

for (let i = 0; i < numbers.length; i++) {
	numbers[i] = numbers[i] ** 2;
}

numbers.sort((a, b) => {
	return b - a;
});

console.log(numbers);

//с помощью цикла я не додумалась как можно сделать сортировку, можешь подсказать, как можно было это сделать?
