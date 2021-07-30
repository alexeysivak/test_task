function inserNewTemplate(elTemplate, imageContainer) {
	imageContainer.innerHTML = null;

	imageContainer.insertAdjacentHTML('afterbegin', elTemplate);
}

function changeImageScale(e) {
	e.preventDefault();

	let scale = +this.dataset.scale;

	if (e.deltaY > 0) {
		scale -= 0.1;
	} else if (e.deltaY < 0) {
		scale += 0.1;
	}

	this.style.transform = `scale(${scale})`;
	this.dataset.scale = scale;
}

export { inserNewTemplate, changeImageScale };
