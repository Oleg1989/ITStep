function muoseHover(event) {
    event.target.classList.add('bold');
}
function muoseClean(event) {
    event.target.classList.remove('bold');
}
function mouseShow(event) {
    event.target.childNodes[1].classList.toggle('show');
}

let root = document.getElementById('root');
root.addEventListener('mouseover', muoseHover);
root.addEventListener('mouseout', muoseClean);
root.addEventListener('click', mouseShow);

