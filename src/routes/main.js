let router = require('express').Router();

router.get(['/home', '/'], (req, res) => {
	res.render('home', { title: 'Home | Infortega' });
});

router.get('/games', (req, res) => {
	res.render('games', { title: 'Games | Infortega' });
});

router.get('/games/snake', (req, res) => {
	res.render('snake', { title: 'Snake | Infortega' });
});

router.get('/games/key-reaction', (req, res) => {
	res.render('keyReaction', { title: 'key-reaction | Infortega' });
});

module.exports = router;
