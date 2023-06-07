import { animationMoveLeft,animateRight } from '/modules/animation';


const modal = () => {
	const buttons = document.querySelectorAll('.popup-btn');
	const modal = document.querySelector('.popup');
	const screenWidth=window.innerWidth;
	
	buttons.forEach(el => {
		el.addEventListener('click', () => {
			
			if (screenWidth > 768) {
				animationMoveLeft('.popup-content', 0, 10,modal);
			} else { 
				modal.style.display = "block";
			}
			
		 });
	});

	modal.addEventListener('click', (e) => { 
		const target = e.target;
		if (!e.target.closest('.popup-content')||target.classList.contains('popup-close')) { 
			if (screenWidth > 768) {
				animateRight('.popup-content', 10, modal);
			} else { 
				modal.style.display = "none";
			}
		}

	});
	
 };
export default modal;