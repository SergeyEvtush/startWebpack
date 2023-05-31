const timer = (deadLine) => {
	console.log(deadLine);
	
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
		}
		
	};

	const updateClock = () => {
		let getTime = getTimeRemaning();

		timerDays.textContent = getTime.days;
		timerHours.textContent = getTime.hours;
		timerMinutes.textContent = getTime.minutes;
		timerSeconds.textContent = getTime.seconds;
	};
	if (getTime.timeRemaining > 0) {
		setTimeout(updateClock, 1000);
	 }
	
};


export default timer;