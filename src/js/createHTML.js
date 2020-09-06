export default function createHTML(teg, quantity) {
	const arrayElements = [];
	for (let i = 0; i < quantity; i++) {
		let element = document.createElement(teg);
		element.classList.add('cell');
		arrayElements.push(element);
	};

	return arrayElements;
}