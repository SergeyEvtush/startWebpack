import { getNameOfBlock } from "/modules/functions";

const menu = () => {
	const menuBtn = document.querySelector('.menu');
	const menu = document.querySelector('menu');
	const closeBtn = menu.querySelector('.close-btn');
	const menuItems = menu.querySelectorAll('ul>li>a');

	const handleMenu = () => {
		menu.classList.toggle('active-menu');
		getNameOfBlock
	};
	
	menuBtn.addEventListener('click', handleMenu);

	closeBtn.addEventListener('click', handleMenu);

	menuItems.forEach((el) => el.addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;
		const targetClass = "#" + getNameOfBlock(target);
		const targetElem = document.querySelector(targetClass);
		 targetElem.scrollIntoView({behavior: "smooth"});
		handleMenu();
	 } ));
};
export default menu;
