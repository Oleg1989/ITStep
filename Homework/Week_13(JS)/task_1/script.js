let tegs = document.body.getElementsByTagName('li');
console.log(tegs);

for(let i = 0; i < tegs.length; i++){
	if(tegs[i].innerText.slice(0, 7) === 'http://'){
		tegs[i].childNodes[0].style.borderBottom = '1px dashed black';
	}
}