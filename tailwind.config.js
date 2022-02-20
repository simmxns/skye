module.exports = {
  content: ["./public/index.html", "./src/**/*.svelte"],
  theme: {
		fontFamily: {
			poppins: [ 
				'Poppins', 'sans-serif'
			]
		},
    extend: {
			backgroundImage: {
				"degrade": "url(https://i.imgur.com/tZhTzsA.jpg)"
			}
    },
  },
  plugins: [],
}