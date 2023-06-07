const createDots = () => {
	const portfolioDot = document.querySelector('.portfolio-dots');
	const portfolioItems = document.querySelectorAll('.portfolio-item');
	

	const createElem = () => {
		const el = document.createElement('li');
		return el;
	}
	const appendClass = (elem, classElem) => {
		elem.classList.add(classElem);
	}
	const createDotsCollection = (sliders, parentDots) => {
		sliders.forEach((el, index) => {
			const dot = createElem();
			if (index === 0) {
				appendClass(dot, 'dot');
				appendClass(dot, 'dot-active');

			} else {
				appendClass(dot, 'dot');
			}
			parentDots.append(dot);
		});
		
	};
	createDotsCollection(portfolioItems, portfolioDot);
};
export default createDots;