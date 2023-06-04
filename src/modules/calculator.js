import { isError,isNumber } from "/modules/functions";

const calculator = () => {

	const calcInput = document.querySelectorAll('.calc-block>input.calc-item');



	calcInput.forEach(el => {
		el.addEventListener('input', (e) => { 
			e.preventDefault();
			isNumber(el);
		});
	});

}
export default calculator;