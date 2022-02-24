<script>
	const weather = {
		timezone: 'Buenos Aires',
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
	const { time, timezone, title, temp, wind, humidity, feeling } = weather
</script>

<div class="w-full flex flex-col items-center justify-center">
	<div
		class="flex items-center justify-evenly flex-col w-[88%] h-96 bg-black/8 shadow-global shadow-black/10 rounded-md backdrop-blur-[50px]"
	>
		<div class="flex flex-col items-center w-full px-6">
			<h2 class="text-xl font-bold">{timezone}</h2>
			<p class="text-xs font-light text-gray-200 mb-5">{time}</p>
			<div class="flex flex-row w-[inherit] items-center justify-between">
				<div class="flex flex-col items-start ">
					<p class="font-bold text-[4rem]">{temp}º</p>
				</div>
				<div class="flex items-center justify-center flex-col">
					<img {src} alt="" class="w-14 h-14" />
					<p class="font-medium text-sm whitespace-nowrap">{title}</p>
				</div>
			</div>
		</div>
		<div
			class="flex justify-around items-center bg-[#202124]/30 h-40 w-[90%] mx-auto rounded-md p-4 backdrop-blur-[50px]"
		>
			<div class="text-center p-3">
				<i class="bx bx-wind bx-sm text-white mb-3" />
				<p>Wind</p>
				<strong class="text-xs font-light">{wind}km/h</strong>
			</div>
			<div class="border-x border-[#fff]/30 h-12" />
			<div class="text-center p-3">
				<i class="bx bxs-droplet bx-sm text-sky-400 mb-3" />
				<p>Humidity</p>
				<strong class="text-xs font-light">{humidity}%</strong>
			</div>
			<div class="border-x border-[#fff]/30 h-12" />
			<div class="text-center p-3">
				<i class="bx bxs-thermometer bx-sm text-red-500 mb-3" />
				<p>Feeling</p>
				<strong class="text-xs font-light">{feeling}º</strong>
			</div>
		</div>
	</div>
</div>
