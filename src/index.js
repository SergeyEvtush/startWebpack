import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calculator from './modules/calculator';
import tabs from './modules/tabs';
import slider from './modules/slider';
import {sendForm } from './modules/forms';

timer('30 may 2023');
menu();
modal();
calculator(100);
sendForm({
	formId: '#form1',
	someElem: [
		{
			type: 'block',
			id:'total'
		}
	]
});
sendForm({
	formId: '#form3',
	someElem: [
		{
			type: 'block',
			id: 'total'
		}
	]
});
sendForm({
	formId: '#form2',
	someElem: [
		{
			type: 'input',
			id: 'form2-message'
		}
	]
});
tabs();
slider('.portfolio-content','.portfolio-item');
