<script>
	const weather = {
		timezone: 'Argentina, Buenos Aires',
		time: 'Sunday 20, 2022',
		title: 'Partly cloudy',
		temp: '29',
		wind: '14.5',
		humidity: '60',
		feeling: '32'
	}

	const weatherIcons = {
		party: 'https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png',
		cloudy: 'https://ssl.gstatic.com/onebox/weather/48/cloudy.png',
		sunny: 'https://ssl.gstatic.com/onebox/weather/48/sunny.png',
		rainy: 'https://ssl.gstatic.com/onebox/weather/48/rain_light.png'
	}
	const src = weatherIcons['party']
	const { time, country, title, temp, wind, humidity, feeling } = weather
</script>

<div class="w-full flex flex-col items-center justify-center mt-6">
	<div class="flex items-center justify-evenly flex-col w-[88%] h-96 bg-black/8 mt-4 shadow-global shadow-black/10 rounded-md backdrop-blur-[50px]">
		<div class="flex flex-row ">
			<div class="flex flex-col items-start">
				<div class="flex items-center">
					<img {src} alt="">
					<p class="ml-2 font-light whitespace-nowrap">{title}</p>
				</div>
				<p class="font-bold text-5xl">{temp}º</p>
			</div>
			<div class="text-right flex flex-col items-end">
				<p class="text-xs font-light text-gray-200">{time}</p>
				<h2 class="text-xl font-bold">{country}</h2>
			</div>
			
			</div>
		<div class="flex justify-around items-center bg-[#202124]/30 w-[90%] mx-auto rounded-md p-4 backdrop-blur-[50px]">
			<div class="text-center p-3">
				<i class='bx bx-wind bx-sm text-white'></i>
				<p>Wind</p>
				<strong class="text-xs font-light">{wind}km/h</strong>
			</div>
			<div class="border-x border-[#fff]/30 h-12"></div>
			<div class="text-center p-3">
				<i class='bx bxs-droplet bx-sm text-sky-400'></i>
				<p>Humidity</p>
				<strong class="text-xs font-light">{humidity}%</strong>
			</div>
			<div class="border-x border-[#fff]/30 h-12"></div>
			<div class="text-center p-3">
				<i class='bx bxs-thermometer bx-sm text-red-500'></i>
				<p>Feeling</p>
				<strong class="text-xs font-light">{feeling}º</strong>
			</div>
		</div>
	</div>
</div>

