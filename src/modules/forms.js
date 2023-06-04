import { isNumber,isRus,isEmail,isFullName } from "/modules/functions";


export const form1 = () => { 
	const form = document.querySelector('#form1');
	const user = document.querySelector('#form1-name');
	const email = document.querySelector('#form1-email');
	const phone = document.querySelector('#form1-phone');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		isFullName(user);
		isEmail(email);
		isNumber(phone);
		
	 });


}
export const form2 = () => { 
	const form = document.querySelector('#form2');
	const user = document.querySelector('#form2-name');
	const email = document.querySelector('#form2-email');
	const phone = document.querySelector('#form2-phone');
	const message = document.querySelector('#form2-message');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		isFullName(user);
		isEmail(email);
		isNumber(phone);
		isRus(message);
	 });

}
export const form3 = () => {
	const form = document.querySelector('#form3');
	const user = document.querySelector('#form3-name');
	const email = document.querySelector('#form3-email');
	const phone = document.querySelector('#form3-phone');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		isFullName(user);
		isEmail(email);
		isNumber(phone);
		
	});
};