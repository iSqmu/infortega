const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// settings
app.set('port', PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares

// routes

app.use(require('./routes/main'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'), () => {
	console.clear();
	console.log(`Server on port ${app.get('port')}`);
});
