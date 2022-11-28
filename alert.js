const alertBro = () => {
	alert('Alert Bro! Gabbbar Is Comming');
}

const askPicnic = () => {
	const response = confirm('Wanna go for picnic');
	console.log(response);
	if (response === true) {
		alert('fee ta de');
	}
	else {
		console.log('dure giye mor');
	}

}

const askName = () => {
	const name = prompt('enter your name');
	if (name) {
		console.log(name);
	}
}