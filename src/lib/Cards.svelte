<script>
	import Card from './Card.svelte'

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

<div class="w-full flex items-center flex-row ">
	<Card 
		time={time} 
		timezone={timezone} 
		title={title} 
		temp={temp} 
		src={src}
		wind={wind} 
		humidity={humidity} 
		feeling={feeling}
	/>

	<Card 
		time={time} 
		timezone={timezone} 
		title={title} 
		temp={temp} 
		src={src}
		wind={wind} 
		humidity={humidity} 
		feeling={feeling}
	/>
</div>
