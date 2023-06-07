const tabs = () => {
	const tabContent = document.querySelectorAll('.service-tab');
	const tabPanel = document.querySelector('.service-header');
	const tabs = document.querySelectorAll('.service-header-tab');

	tabPanel.addEventListener('click', (e) => { 
		const target = e.target;

		if (target.closest('.service-header-tab')) {
			const tabsBtn = target.closest('.service-header-tab');
			tabs.forEach((tab, index) => {
				if (tab === tabsBtn) {
					tab.classList.add('active');
					tabContent[index].classList.remove('d-none');
				} else { 
					tabContent[index].classList.add('d-none');
					tab.classList.remove('active');
				}
			 });
		 }
	});


 };
export default tabs;