import { validations,sendData } from "/modules/helpers";
//https://jsonplaceholder.typicode.com/posts

export const sendForm = ({ formId, someElem = [] }) => {
	const form = document.querySelector(formId);
	const statusBlock = document.createElement('div');
	const message = {
		loadText: 'images/preloader.gif',
		errorText: 'Error...',
		successText: 'Success'
	};
	const validation = (formInputs, functions) => {
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
	
	const submitForm = () => {
		const formElements = form.querySelectorAll('input');
		const formData = new FormData(form);
		const formBody = {};
		const bool = true;
	
		
		
		
		form.append(statusBlock);

		formData.forEach((key, val) => {
			formBody[key] = val;
		});
		someElem.forEach(el => {
			const element = document.getElementById(el.id)
			if (el.type === "block") {
				formBody[el.id] = element.textContent;
			}
			else if (el.type === "input") {
				formBody[el.id] = element.value;
			}
		});
		const val = validation(formElements, validations);
		if (val.some(el => el.hasOwnProperty(bool))) {
			const array = val.filter(el => el.hasOwnProperty(bool));
			statusBlock.innerHTML = '';
			array.forEach(elem => { 
				statusBlock.insertAdjacentHTML('afterbegin', ` Ошибка ввода данных в input ${elem[bool]}`);
				setTimeout(() => {statusBlock.innerHTML = ''; },2000);
			}); 
			
		} else {  
			sendData('https://jsonplaceholder.typicode.com/posts', formBody, statusBlock, message);
		 } 
		
		formElements.forEach(el => {
			el.value = '';
		});
	};
	try {
		if (!form) {
			throw new Error('Ошибка нет формы');
		}
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			statusBlock.insertAdjacentHTML('afterbegin',`<img src=${message.loadText} alt="preloader"></img>`);
				submitForm();
		});
		
	} catch (error) {
		console.log(error.message);
	}
};