const timer = (deadLine) => {
	/* console.log(deadLine); */
	
	const timerHours = document.getElementById('timer-hours');
	const timerMinutes = document.getElementById('timer-minutes');
	const timerSeconds = document.getElementById('timer-seconds');
	const timer = document.getElementById('timer');
	const timerDays = document.createElement('span');
	const dots = document.createElement('span');

	dots.innerText = ':';
	timerDays.id = 'timer-days';
	timer.insertAdjacentElement('afterbegin', dots);
	timer.insertAdjacentElement('afterbegin', timerDays);

	const getTimeRemaning = () => {
		
		const dateStop = new Date(deadLine).getTime();
		const dateNow = new Date().getTime();
		
		let timeRemaining = (dateStop - dateNow) / 1000;
		let days = Math.floor(timeRemaining / 60 / 60 / 24);
		let hours = (Math.floor(timeRemaining / 60 / 60)) % 24;
		let minutes = (Math.floor(timeRemaining / 60)) % 60;
		let seconds = Math.floor(timeRemaining % 60);
		
		return {
			timeRemaining,
			days,
			hours,
			minutes,
			seconds
		};
		
	};

	const nullBeforeNumber = (number) => { 
		if (number > 9) {
			return number;
		} else { 
			return `0${number}`;
		}
	}
	const returnNull = (number,elem) => {
		if (number <= 0) {
			elem.innerText = '00';
		} else { 
			elem.textContent=nullBeforeNumber(number);
		}
	 }

	const updateClock = () => {
		let getTime = getTimeRemaning();
		
		 	 returnNull(getTime.days,timerDays);
			 returnNull(getTime.hours,timerHours);
			 returnNull(getTime.minutes,timerMinutes);
			 returnNull(getTime.seconds,timerSeconds); 
		console.log('new function');
		
	};
	const setIntervalCock = () => {
		let getTime = getTimeRemaning();
		let idInterval = setInterval(updateClock, 1000);
		if (getTime.timeRemaining < 0) {
			clearInterval(idInterval);
			updateClock();
		} 
	};
	setIntervalCock();
	
};


export default timer;