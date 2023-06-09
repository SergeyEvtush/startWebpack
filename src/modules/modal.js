import { animate } from '/modules/helpers';


const modal = () => {
	const buttons = document.querySelectorAll('.popup-btn');
	const modal = document.querySelector('.popup');
	const screenWidth=window.innerWidth;
	
	buttons.forEach(el => {
		el.addEventListener('click', () => {
			
			if (screenWidth > 768) {
				
				modal.style.display = 'block';
				animate({
					duration: 1500,
					timing(timeFraction) {
						return -Math.pow((11 - 6 * 0 - 11 * timeFraction) / 4, 2) + Math.pow(1, 2);
					},
					draw(progress) {
						document.querySelector('.popup-content').style.cssText = `left:${progress * 50 + '%'};opacity:${progress};`
					}
				});
			} else { 
				modal.style.display = "block";
			}
			
		 });
	});

	modal.addEventListener('click', (e) => { 
		const target = e.target;
		if (!e.target.closest('.popup-content')||target.classList.contains('popup-close')) { 
			if (screenWidth > 768) {
				
				animate({
					duration: 2000,
					timing(timeFraction) {
					  return timeFraction;
					},
					draw(progress) {

						document.querySelector('.popup-content').style.cssText = `left:${50 - (progress * 50) + '%'};opacity:${1-progress}`;
						
						
					}
				});
				setTimeout(() => {
					modal.style.display = 'none';
				}, 2000);
				 
			} else { 
				modal.style.display = "none";
			}
		}

	});
	
 };
export default modal;