const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circle = document.querySelectorAll(".circle");

let curActive = 1;

next.addEventListener("click", () => {
	curActive++;

	if (curActive > circle.length) {
		curActive = circle.length;
	}

	update();
});

prev.addEventListener("click", () => {
	curActive--;

	if (curActive < 1) {
		curActive = 1;
	}

	update();
});

function update() {
	circle.forEach((circle, i) => {
		if (i < curActive) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});

	const actives = document.querySelectorAll(".active");
	progress.style.width =
		((actives.length - 1) / (circle.length - 1)) * 100 + "%";

	if (curActive === 1) {
		prev.disabled = true;
	} else if (curActive === circle.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}
