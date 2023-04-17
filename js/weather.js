const API_KEY = "989655800aaec2c625c2bffbe3be01f8";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			const temperature = document.querySelector("#weather span:nth-child(2)");
			weather.innerText = data.weather[0].main;
			temperature.innerText = `${data.main.temp}°C`;
			city.innerText = data.name;
		});
}

function onGeoError() {
	alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
