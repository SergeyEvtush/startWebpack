import createDots from '/modules/dots';


const slider = (sliderBlockClass, slidesClass) => {
	
	createDots();
	const sliderBlock = document.querySelector(sliderBlockClass);
	const slides = sliderBlock.querySelectorAll(slidesClass);
	const dots =  sliderBlock.querySelectorAll('.dot');
	const timeInterval = 2000;
	const activeSliderClass = 'portfolio-item-active';
	const dotsActiveClass = 'dot-active';
	let currentSlide = 0;
	let interval;



	const prevSlide = (elems,index,strClass) => { 
		elems[index].classList.remove(strClass);
	};

	const nextSlide = (elems,index,strClass) => { 
		elems[index].classList.add(strClass);
	};

	const startSlide = (time = 1500) => {
					
		interval=setInterval(autoSlide,time);
	 };

	const autoSlide = () => {
		prevSlide(slides,currentSlide,activeSliderClass);
		prevSlide(dots,currentSlide,dotsActiveClass);
		currentSlide++;
		if (currentSlide >= slides.length) { 
			currentSlide = 0;
		}
		nextSlide(slides,currentSlide,activeSliderClass);
		nextSlide(dots,currentSlide,dotsActiveClass);
	};
	
	const stopSlide = () => {
		clearInterval(interval);
	};
	const createSlider = () => {

		sliderBlock.addEventListener('click', (e) => {
			e.preventDefault();
			const target = e.target;
			if (!target.matches('.dot,.portfolio-btn')) {
				return;
			}
			prevSlide(slides, currentSlide, activeSliderClass);
			prevSlide(dots, currentSlide, dotsActiveClass);
			if (target.matches('#arrow-right')) {
				currentSlide++;
			}
			else if (target.matches('#arrow-left')) {
				currentSlide--;
			}
			else if (target.classList.contains('dot')) {
				dots.forEach((el, index) => {
					if (target === el) {
						currentSlide = index;
					}
				});
			}
			if (currentSlide >= slides.length) {
				currentSlide = 0;
			}
			if (currentSlide < 0) {
				currentSlide = slides.length - 1;
			}
			nextSlide(slides, currentSlide, activeSliderClass);
			nextSlide(dots, currentSlide, dotsActiveClass);
		});
		sliderBlock.addEventListener('mouseenter', (e) => {
			if (e.target.matches('.dot,.portfolio-btn')) {
				stopSlide();
			}
		}, true);
		sliderBlock.addEventListener('mouseleave', (e) => {
			if (e.target.matches('.dot,.portfolio-btn')) {
				startSlide(timeInterval);
			}
		}, true);
		startSlide(timeInterval);
	};
	
	if (sliderBlock === null || sliderBlock === "undefined" || slides === null || slides === "undefined"||slides.length===0) {
		console.log(sliderBlock);
		console.log(slides);
		return
	} else {
		createSlider();
	 }
				

};
export default slider;