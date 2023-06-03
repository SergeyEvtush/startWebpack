import { getNameOfBlock } from "/modules/functions";

const menu = () => {
	const menuBtn = document.querySelector('.menu');
	const menu = document.querySelector('menu');
	const closeBtn = menu.querySelector('.close-btn');
	const menuItems = menu.querySelectorAll('ul>li>a');
	const mainLink = document.querySelector('main>a');
	
	
	const handleMenu = () => {
		menu.classList.toggle('active-menu');
		
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
	}));
	mainLink.addEventListener("click", (e) => { 
		e.preventDefault();
		const target = e.target;
		const targetClass = "#" + getNameOfBlock(target.parentElement);
		const targetElem = document.querySelector(targetClass);
		 targetElem.scrollIntoView({behavior: "smooth"});
	});
};
export default menu;
