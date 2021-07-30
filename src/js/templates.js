export function getTemplate({ imageInput, urlInput, animationDirection }) {
	return `
            <a href="${urlInput}" class="${animationDirection}">
                <img src="${URL.createObjectURL(
					imageInput,
				)}" alt="inserted image" disabled class="inserted-image" id="insertedImage" data-scale="1"/>
            </a>
    `;
}
