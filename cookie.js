	const getCookie = name => {
		const cookie = document.cookie;
		const alCookie = cookie.split('; ');
		const findCookie = alCookie.find(c => c.includes(anyname));
		if(findCookie){
			'country=us'//airokom kichu akta pawa jabe
			const cookieNameValue = findCookie.split('=');
			return cookieNameValue;
		}
	}