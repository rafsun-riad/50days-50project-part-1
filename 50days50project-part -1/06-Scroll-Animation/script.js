const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(
	(entries) => {
		console.log(entries);
		entries.forEach((entry) => {
			// if (entry.isIntersecting) {
			// 	entry.target.classList.add('show');
			// } else {
			// 	entry.target.classList.remove('show');
			// }
			entry.target.classList.toggle('show', entry.isIntersecting);
		});
	},
	{
		threshold: 1,
	}
);

boxes.forEach((box) => {
	observer.observe(box);
});

// const boxes = document.querySelectorAll('.box');
// window.addEventListener('scroll', checkBoxes);
// checkBoxes();

// function checkBoxes() {
// 	const triggerBottom = (window.innerHeight / 5) * 4;

// 	boxes.forEach((box) => {
// 		const boxTop = box.getBoundingClientRect().top;

// 		if (boxTop < triggerBottom) {
// 			box.classList.add('show');
// 		} else {
// 			box.classList.remove('show');
// 		}
// 	});
// }
