const express = require('express');
const hbs = require('hbs');

const port= process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname +'/views/partials');
app.use(express.static(__dirname+ '/public'));

hbs.registerHelper('getCurrentYear', function() {
	return new Date().getFullYear()
});

app.get('/', function(request, response) {
	response.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome to my website',
		currentYear: new Date().getFullYear()
	});
});

app.get('/about', function(request, response) {
	response.render('about.hbs', {
		pageTitle: 'About shahrukh'
	})
})



app.listen(port, function() {
	console.log(`Server is running on port ${port}`);
})