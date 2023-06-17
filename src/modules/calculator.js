
import { animate,validations } from '/modules/helpers';

const calculator = (price=100) => {
	const calcBlock = document.querySelector('.calc-block'),
	 calcType = calcBlock.querySelector('.calc-type'),
	 calcSquare = calcBlock.querySelector('.calc-square'),
	 calcCount = calcBlock.querySelector('.calc-count'),
	 calcDay = calcBlock.querySelector('.calc-day'),
	 calcInput = calcBlock.querySelectorAll('input.calc-item'),
	 total = calcBlock.querySelector('#total');

	
	
	const coutCalc = () => {
		const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
		const calcSquareValue = +calcSquare.value;
		let totalValue = 0;
		let countCalcValue = 1;
		let calDayValue = 1;
		if (calcCount.value > 1) { 
			countCalcValue += +calcCount.value / 10;
		}
		if (calcDay.value&&calcDay.value < 5) { 
			calDayValue = 2;
		} else if (calcDay.value&&calcDay.value < 10) {
			calDayValue = 1.5;
		 }
		if (calcType.value && calcSquare.value&&calcCount.value&&calcDay.value) {
			totalValue = price * calcTypeValue * calcSquareValue * countCalcValue * calDayValue;
		} else { 
			totalValue = 0;
		}
		
		animate({
			duration: 1500,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				total.textContent = Math.round(progress * totalValue);
			}
		});
	};

	calcInput.forEach(el => {
		el.addEventListener('input', (e) => { 
			e.preventDefault();
			validations.isNumber(el);
		});
	});
	

	calcBlock.addEventListener('input', (e) => { 
		const target = e.target;
		if (target === calcType || target === calcSquare ||
			target === calcCount || target === calcDay) {
			coutCalc();
		 }
		
	});

};
export default calculator;