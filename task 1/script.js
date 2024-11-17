const results = document.querySelector(".result");
const maxResult = document.querySelector(".max-result");
const minResult = document.querySelector(".min-result");

const cities = ["Москва", "Санкт-Петербург", "Токио", "Рим"];
const temperatures = [];

for (let i = 0; i < cities.length; i++) {
	let temperatureInput = prompt(
		`Пожалуйста, введите температуру для города ${cities[i]}`,
		""
	);
	if (!temperatureInput) {
		alert("Введите температуру!");
		break;
	}
	if (isNaN(temperatureInput)) {
		alert("Введите числа!");
		break;
	}
	temperatures.push(+temperatureInput);
}

if (temperatures.length === 0) {
	results.style.display = "none";
	maxResult.style.display = "none";
	minResult.style.display = "none";
} else {
	temperatures.forEach((temp, index) => {
		const li = document.createElement("li");
		li.textContent = `Температура для города ${cities[index]}: ${temp}°C`;
		results.appendChild(li);
	});
}

const maxTemp = Math.max(...temperatures);
maxResult.textContent = `Максимальная температура: ${maxTemp}°C`;

const minTemp = Math.min(...temperatures);
minResult.textContent = `Минимальная температура: ${minTemp}°C`;
