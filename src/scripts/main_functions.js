let cookies = document.cookie.split(';');
let searchCookie = (n) => {
	cookies.forEach((element) => {
		if (element[0] == n) {
			return element;
		}
	});
};

let username = searchCookie('username');
console.log(username);

console.log('hola mundo');
