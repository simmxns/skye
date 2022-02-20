<script>
	const weather = {
		icon: 'icon.png',
		country: 'Argentina, Buenos Aires',
		title: 'Partly cloudy',
		temp: '29',
		wind: '14.5',
		humidity: '60',
		feeling: '32'
	}

	const imgForecast = {
		party: 'https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png',
		cloudy: 'https://ssl.gstatic.com/onebox/weather/48/cloudy.png',
		sunny: 'https://ssl.gstatic.com/onebox/weather/48/sunny.png',
		rainy: 'https://ssl.gstatic.com/onebox/weather/48/rain_light.png'
	}
	const src = imgForecast["cloudy"]
</script>

<div class="w-full flex flex-col items-center justify-center mt-6">
		<div class="text-center">
			<p class="text-xs font-light text-gray-200">Sunday 20, 2022</p>
			<h1 class="text-xl font-bold">{weather.country}</h1>
		</div>
	<div class="flex items-center justify-center flex-col w-[88%] h-96 bg-black/8 mt-4 shadow-lg rounded-md backdrop-blur-[50px]">
		<div class="flex items-center"><img {src} alt=""><p class="ml-2 font-light">{weather.title}</p></div>
		<p class="font-bold text-5xl">{weather.temp}º</p>
	</div>
</div>

