"use strict";

const text = document.querySelector('.text');
text.style.cssText = 'display:flex;flex-direction:column;aline-items:center;';
const dayTime = {
	date: new Date(),
	options :{ weekday: 'long'},
	morning:"Доброе утро",
	day:"Добрый день",
	evening:"Добрый вечер",
	night: "Доброй ночи",
	greetings() {
		if (this.date.getHours() > 5 && this.date.getHours() < 12) { 
			return this.morning;
		} if (this.date.getHours() > 12 && this.date.getHours() < 18) { 
			return this.day;
		} if (this.date.getHours() > 18 && this.date.getHours() < 23) {
			return this.evening;
		} if (this.date.getHours() > 0 && this.date.getHours() < 5) { 
			return this.night;
		}
	},
	
	getWeekDay() {
		return `Сегодня: ${this.date.toLocaleDateString('ru-RU', this.options)}`;
	},
	getTimeNow() { 
		if (this.date.getHours() > 0 && this.date.getHours() < 18) {
			return `Текущее время: ${this.date.toLocaleTimeString()} AM`;
		}
		else { 
			return `Текущее время: ${this.date.toLocaleTimeString()} PM`;
		}
	},
	returnYear() { 
		return this.date.getFullYear();
	},
	toNewYearDays() {
		const dateNow = this.returnYear();
		const d = new Date(`31 december ${dateNow} `);
		const sec = d.getTime();
		const secNow = this.date.getTime();
		const subtractionRes = sec - secNow;
		const days = Math.floor(subtractionRes/1000 / 60 / 60 / 24);
		return `До нового года осталось: ${days} дней`;
	}
	
};

text.insertAdjacentHTML('afterbegin', `<h2>${dayTime.greetings()}</h2>
													<h2>${dayTime.getWeekDay()}</h2>
													<h2>${dayTime.getTimeNow()}</h2>
													<h2>${dayTime.toNewYearDays()}</h2>`)

