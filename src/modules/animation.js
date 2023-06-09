export const animationMoveLeft = (classElement, startValue, speed,el) => {
	
	const element = document.querySelector(classElement);
	el.style.display = "block";
	const elemWidth = element.getBoundingClientRect();
	const windowWidth = window.innerWidth;
	element.style.left = startValue+'px';
	
	
	let idAnimation;
	let count = 0;
	const animate = () => {
		count+=speed;
		idAnimation = requestAnimationFrame(animate);
		if (count < (windowWidth-elemWidth.width)/2) {
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

export const animateNumbers = (interval, startingValue, tValue, countValue, element) => {
	let idInterval;
	let count;
	idInterval = setInterval(() => {
		if (startingValue < tValue) {
			if (tValue > 50000) {
				startingValue += count;
			} else {
				count = countValue[0];
			}
			startingValue += count;
			element.textContent = startingValue;
		} else {
			clearInterval(idInterval);
		}
	}, interval);
};

