const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
	// const markUp = `
	//     <div class="key">
	//         ${e.key === ' ' ? 'Space' : e.key}
	//         <small>event.key</small>
	//     </div>
	//     <div class="key">
	//         ${e.code}
	//         <small>event.code</small>
	//     </div>
	// `;

	// insert.insertAdjacentHTML('afterbegin', markUp);
	insert.innerHTML = `
        <div class="key">
            ${e.key === ' ' ? 'Space' : e.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${e.code}
            <small>event.code</small>
        </div>
    `;
});
