import '../css/main.css';
import { getTemplate } from './templates';
import { inserNewTemplate, changeImageScale } from './mainView';

initFormListeners();

function initFormListeners() {
	const mainForm = document.getElementById('mainForm');
	mainForm.addEventListener('submit', showImageLink);
}

function showImageLink(e) {
	e.preventDefault();

	const formDataObj = prepareFormData(this);

	const elTemplate = getTemplate(formDataObj);

	const imageContainer = document.getElementById('imageContainer');
	inserNewTemplate(elTemplate, imageContainer);

	e.target.reset();

	initImageListener();
}

function prepareFormData(eventForm) {
	const formData = new FormData(eventForm);

	const formDataObj = {};

	for (let [key, value] of formData.entries()) {
		formDataObj[key] = value;
	}

	return formDataObj;
}

function initImageListener() {
	const insertedImage = document.getElementById('insertedImage');
	insertedImage.addEventListener('wheel', changeImageScale);
}
