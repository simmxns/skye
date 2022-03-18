<script>
  import Card from "./Card.svelte";

  const weatherIcons = {
    party: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    cloudy: "https://ssl.gstatic.com/onebox/weather/48/cloudy.png",
    sunny: "https://ssl.gstatic.com/onebox/weather/48/sunny.png",
    rainy: "https://ssl.gstatic.com/onebox/weather/48/rain_light.png",
  };

  const weather = [
    {
      timezone: "Buenos Aires",
      time: "Sunday 20, 2022",
      title: "Partly cloudy",
      src: weatherIcons["party"],
      temp: "29",
      wind: "14.5",
      humidity: "60",
      feeling: "32",
    },
    {
      timezone: "Buenos Aires",
      time: "Sunday 20, 2022",
      title: "Partly cloudy",
      src: weatherIcons["party"],
      temp: "29",
      wind: "14.5",
      humidity: "60",
      feeling: "32",
    },
	{
      timezone: "Buenos Aires",
      time: "Sunday 20, 2022",
      title: "Partly cloudy",
      src: weatherIcons["party"],
      temp: "29",
      wind: "14.5",
      humidity: "60",
      feeling: "32",
    },
	{
      timezone: "Buenos Aires",
      time: "Sunday 20, 2022",
      title: "Partly cloudy",
      src: weatherIcons["party"],
      temp: "29",
      wind: "14.5",
      humidity: "60",
      feeling: "32",
    },
	{
      timezone: "Buenos Aires",
      time: "Sunday 20, 2022",
      title: "Partly cloudy",
      src: weatherIcons["party"],
      temp: "29",
      wind: "14.5",
      humidity: "60",
      feeling: "32",
    },
	{
      timezone: "Buenos Aires",
      time: "Sunday 20, 2022",
      title: "Partly cloudy",
      src: weatherIcons["party"],
      temp: "29",
      wind: "14.5",
      humidity: "60",
      feeling: "32",
    },
	{
      timezone: "Buenos Aires",
      time: "Sunday 20, 2022",
      title: "Partly cloudy",
      src: weatherIcons["party"],
      temp: "29",
      wind: "14.5",
      humidity: "60",
      feeling: "32",
    },
  ];
</script>

<div class="cards" id="cards">
	{#each weather as { time, timezone, title, temp, src, wind, humidity, feeling }}
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
  {/each}
</div>

<style lang="postcss">
  .cards {
    @apply flex items-center w-[95%] h-[420px] overflow-x-auto  snap-mandatory snap-x;
    -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
	gap: 20px;
  }

  /* .cards::-webkit-scrollbar {
	display: none;
	overflow-x: scroll;
	
  } */

</style>
