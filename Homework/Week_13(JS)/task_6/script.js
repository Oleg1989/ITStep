function addChangeDiv(event) {
	if (event.target.id === 'div-1') {
		document.body.addEventListener('mousemove', moveDiv);
	} else {
		return;
	}
}
function deleteChangeDiv(event) {
	document.body.removeEventListener('mousemove', moveDiv);
}
function moveDiv(event) {
	if (event.type === 'mousemove') {
		console.log(event);
		div.style.width = `${event.clientX}px`;
		div.style.height = `${event.clientY}px`;
	}
}
let div = document.getElementById('div-1');
div.addEventListener('mousedown', addChangeDiv);
div.addEventListener('mouseup', deleteChangeDiv);

