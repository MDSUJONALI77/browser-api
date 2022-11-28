const addItem = () => {
	const nameFeild = document.getElementById('product-name');
	const product = nameFeild.value;
	if (!product) {
		return;
	}
	//displayin the ul
	displayProduct(product);
	//add to local storage
	addProductToCart(product);
	nameFeild.value = '';

}

const displayProduct = name => {
	const ul = document.getElementById('products');
	const li = document.createElement('li');
	li.innerText = name;
	ul.appendChild(li);
}

//cart or product ta local storage a ache kina seta dekhte hobe
const getCart = () => {
	const cart = localStorage.getItem('cart');
	let cartObj;
	if (cart) { //thakle setake parse korte hobe
		cartObj = JSON.parse(cart);
	}
	else { //r jodi na thake tahole akta empty object show koeabo
		cartObj = {};
	}
	return cartObj;
}

//local storage a cart k add korte hobe
const addProductToCart = name => {
	const cart = getCart();
	if (cart[name]) {
		cart[name] = cart[name] + 1;
	}
	else {
		cart[name] = 1;
	}
	const cartStringified = JSON.stringify(cart);
	localStorage.setItem('cart', cartStringified)
	console.log(cart);
}

//display cart from local storage
const displayFromLocalStorage = () => {
	const productsOfLS = getCart();
	for (const product in productsOfLS) {
		displayProduct(product);
	}
}
displayFromLocalStorage();

//order place korle local storage o display theke product gulo cholejabe
const placeOrder = () => {
	document.getElementById('products').textContent = '';
	localStorage.removeItem('cart');
}