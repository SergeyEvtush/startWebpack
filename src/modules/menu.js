import {scrollingToView } from "/modules/helpers";

const menu = () => {
	const menu = document.querySelector('menu');
	const main = document.querySelector('main');
	
	
	const handleMenu = () => {
		menu.classList.toggle('active-menu');
	};
	main.addEventListener('click', (e) => {
		const target = e.target;
		if (menu.classList.contains('active-menu')) { 
			handleMenu();
		}
		if (target.closest('.menu')) { 
			handleMenu();
		}
		if (target.closest('a')) { 
			e.preventDefault();
			scrollingToView(target.parentElement, { behavior: "smooth" });
		}
	});
	menu.addEventListener('click', (e) => { 
		e.preventDefault();
		const target = e.target;
		if (target.closest('.active-menu')&&target!==menu) { 
			if (!target.classList.contains('close-btn') && target.hasAttribute('href')) {
				scrollingToView(target, { behavior: "smooth" });
				handleMenu();
			}
			if (target.classList.contains('close-btn')) {
				handleMenu();
			 }
		}
		
	});


};
export default menu;
