import { validations,validationForm,sendData } from "/modules/helpers";
//https://jsonplaceholder.typicode.com/posts

export const sendForm = ({ formId, someElem = [] }) => {
	const form = document.querySelector(formId);
	const statusBlock = document.createElement('div');
	const message = {
		loadText: 'images/preloader.gif',
		errorText: 'Error...',
		successText: 'Success'
	};

	const submitForm = () => {
		const formElements = form.querySelectorAll('input');
		const formData = new FormData(form);
		const formBody = {};
		const bool = true;
		const val = validationForm(formElements, validations);
		
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

		

		if (val.some(el => el.hasOwnProperty(bool))) {
			const arrayErrors = val.filter(el => el.hasOwnProperty(bool));
			statusBlock.innerHTML = '';
			arrayErrors.forEach(elem => { 
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