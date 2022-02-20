module.exports = {
  content: ["./public/index.html", "./src/**/*.svelte"],
  theme: {
		fontFamily: {
			apple: [ 
				'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'
			]
		},
    extend: {
			backgroundImage: {
				"degrade": "url(https://products.ls.graphics/mesh-gradients/images/29.-Pale-Cornflower-Blue_1.jpg)"
			}
    },
  },
  plugins: [],
}