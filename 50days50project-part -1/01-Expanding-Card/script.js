const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
	panel.addEventListener("click", (e) => {
		removeActiveClasses();
		e.target.classList.add("active");
	});
});

const removeActiveClasses = function () {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
};
