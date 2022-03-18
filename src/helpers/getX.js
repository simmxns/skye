/**
 * Function that's discover the axis X of an element and position that element to that x coord
 * @param {Event} e Event handling
 * @param {Element} element Element to be moved
 */
export function getX(e, element) {
	const x = e.target.offsetLeft
	element.style.setProperty('left', `${x}px`)
}