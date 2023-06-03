export const animationMoveLeft = (classElement, startValue, speed, stopValue, el) => {
	
	const element = document.querySelector(classElement);
	el.style.display = "block";
	
	element.style.left = startValue+'px';
	
	
	let idAnimation;
	let count = 0;
	const animate = () => {
		count+=speed;
		idAnimation = requestAnimationFrame(animate);
		if (count < stopValue) {
			element.style.left = count + `px`;
			
		}
		else {
			cancelAnimationFrame(idAnimation);
		} 
	};
	animate();
};

export const animateRight = (classElement,speed,el) => {
	const element = document.querySelector(classElement);
	let idAnimation;
	let count = element.getBoundingClientRect().left;

	const addDisplayNone = (ell) => {
		ell.style.display = "none";
	}
	
	const animate = () => {
		count = count - speed;
		idAnimation = requestAnimationFrame(animate);
		if (count > 0) {
			element.style.left = count + `px`;
		}
		if (count <= 0) {
			addDisplayNone(el);
			element.style.left = "0px";
			cancelAnimationFrame(idAnimation);
		}
	};
	animate();
	
};

