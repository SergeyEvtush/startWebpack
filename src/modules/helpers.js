export const animate = ({ timing, draw, duration }) => {

	let start = performance.now();
 
	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;
 
		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);
 
		draw(progress); // отрисовать её
 
		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
 
	});
};

export const validations = {
	"user_phone": (elem) => {
		let bool;
		if (/^[\d\+][\d\(\)\ -]{4,14}\d$/g.test(elem.value) && elem.value !== '') { //валидация на номера телефона только чисел
			bool = isError(elem, false);
		} else {
			bool = isError(elem, true);
		}
		return bool;
	},
	"user_email": (elem) => {
		let bool;
		if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g.test(elem.value) && elem.value !== '') { //валидация на ввод email
			bool = isError(elem, false);
		} else {
			bool = isError(elem, true);
		}
		return bool;
	},
	"user_name": (elem) => {
		let bool;
		if (/(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/g.test(elem.value) && elem.value !== '') { //валидация на ввод только чисел
			bool = isError(elem, false);
		} else {
			bool = isError(elem, true);
		}
		return bool;
	},
	"isRus": (elem) => {
		let bool;
		if (/[^а-яА-Я]/g.test(elem.value) && elem.value !== '') { //валидация на ввод только кирилицы
			bool = isError(elem, false);
		} else {
			bool = isError(elem, true);
		}
		return bool;
	},
	"isNumber": (elem) => {
	
		if (!/[^\d]/g.test(elem.value) && elem.value !== '') { //валидация на ввод только чисел
			isError(elem, false);
		} else {
			isError(elem, true);
		}
	}
	
};
export const validationForm = (formInputs, functions) => {
	const arr = [];
	formInputs.forEach(el => {
		if (functions.hasOwnProperty(el.name)) {
			const obj = {};
			obj[functions[el.name](el)] =el.name ;
			arr.push(obj);
		}
	});
	console.log(arr);
	return arr;
};
export const isError = (elem, bool) => {
	const message = {
		errorMessage: "bad validation",
		succesMessage: "good validation"
	};

	if (bool === true) {
		elem.classList.add('iserror');
		elem.value = message.errorMessage;
		setTimeout(()=>{elem.value = ''}, 1000);
		console.log(message.errorMessage);
		
	} else {
		if (elem.classList.contains('iserror')) {
			elem.classList.remove('iserror');
			console.log(message.succesMessage);
		}
		console.log(message.succesMessage);
		
	}
	return bool;
};
export const scrollingToView = (targetElement, scrollOptions) => {
	const elem = document.querySelector(`#${getNameOfBlock(targetElement)}`)
	elem.scrollIntoView(scrollOptions);//
};
export const getNameOfBlock = (link) => {
	const hrefLink = link.href;
	const res = hrefLink.split('#').pop();
	return res;
};
export const sendData = (url, data, messageElement, {errorText,successText}) => {
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then(() => {
			setTimeout(() => { messageElement.textContent = successText }, 1000);
		})
		.then(() => {
			setTimeout(() => { messageElement.textContent = '' }, 2000);
		})
		.catch(dataError => messageElement.textContent = `${errorText}:${dataError.message}`);
};
export const getData = (url) => {
	return fetch(url)
		.then(data => data.json())
		.catch(errorData => console.log(errorData))
		.finally(() => console.log('Сессия завершена')
		);
};