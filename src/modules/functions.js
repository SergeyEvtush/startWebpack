export const getNameOfBlock = (link) => {
	const hrefLink = link.href;
	const res = hrefLink.split('#').pop();
	return res;
}

export const isFullName = (elem) => {
	if (/(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/g.test(elem.value) && elem.value !== '') { //валидация на ввод только чисел
		
		isError(elem, false);
	} else {
		
		isError(elem, true);
	
	}
}

export const isEmail=(elem) => {

	if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g.test(elem.value)&&elem.value!=='') { //валидация на ввод email
		isError(elem, false);
	} else { 
		isError(elem, true);
		
	}
 }

export const isNumber = (elem) => {
	
	if (!/[^\d]/g.test(elem.value)&&elem.value!=='') { //валидация на ввод только чисел
		isError(elem, false);
	} else { 
		isError(elem, true);
	}
}
 
export const isRus = (elem) => {
	if (!/[^а-яА-Я]/g.test(elem.value) && elem.value !== '') { //валидация на ввод только кирилицы
		isError(elem, false);
	} else { 
		isError(elem, true);
	}
}
 
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
		return true;
	} else {
		if (elem.classList.contains('iserror')) {
			elem.classList.remove('iserror');
			console.log(message.succesMessage);
		}
		console.log(message.succesMessage);
		return false;
	}
};