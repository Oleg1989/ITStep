class Color {
	constructor(letters, colorHex) {
		this.letters = letters;
		this.colorHex = colorHex;
		document.getElementById('btn').addEventListener('click', this.addColor)
	}
	addColor = () => {
		let form = document.getElementById('form');
		let divsForm = form.getElementsByTagName('div');
		for (let i = 0; i < divsForm.length; i++) {
			if (divsForm[i].children[1].name === 'color') {
				if (divsForm[i].children[1].value === '') {
					divsForm[i].children[0].innerHTML = 'Fill in the input field!!!';
					divsForm[i].children[0].classList.add('error');
					divsForm[i].children[1].classList.add('border-red');
					return false;
				} else {
					let code = divsForm[i].children[1].value;
					for (let j = 0; j < code.length; j++) {
						if (this.letters.indexOf(code[j].toLowerCase()) === -1) {
							divsForm[i].children[0].innerHTML = 'Color can only contain letters!!!';
							divsForm[i].children[0].classList.add('error');
							divsForm[i].children[1].classList.add('border-red');
							return false;
						}
					}
				}
				divsForm[i].children[0].innerHTML = 'Color:';
				divsForm[i].children[0].classList.add('success');
				divsForm[i].children[1].classList.add('border-green');
			}
			if (divsForm[i].children[1].name === 'type') {
				if (divsForm[i].children[1].value === '') {
					divsForm[i].children[0].innerHTML = 'Select type!!!';
					divsForm[i].children[0].classList.add('error');
					divsForm[i].children[1].classList.add('border-red');
					return false;
				} else {
					divsForm[i].children[0].innerHTML = 'Type:';
					divsForm[i].children[0].classList.add('success');
					divsForm[i].children[1].classList.add('border-green');
				}
				divsForm[i].children[0].innerHTML = 'Color:';
				divsForm[i].children[0].classList.add('success');
				divsForm[i].children[1].classList.add('border-green');
			}
			if (divsForm[i].children[1].name === 'code') {
				if (divsForm[i].children[1].value === '') {
					divsForm[i].children[0].innerHTML = 'Fill in the input field!!!';
					divsForm[i].children[0].classList.add('error');
					divsForm[i].children[1].classList.add('border-red');
					return false;
				} else {
					let select = document.getElementById('select');
					if (select.value === 'RGB') {
						let code = divsForm[i].children[1].value;
						let codeArr = code.split(',');
						if (codeArr.length !== 3) {
							divsForm[i].children[0].innerHTML = 'RGB code must match the pattern \n [0-255],[0-255],[0-255]';
							divsForm[i].children[0].classList.add('error');
							divsForm[i].children[1].classList.add('border-red');
							return false;
						} else {
							for (let j = 0; j < codeArr.length; j++) {
								if (+codeArr[j] < 0 || +codeArr[j] > 255) {
									divsForm[i].children[0].innerHTML = 'RGB code must match the pattern \n [0-255],[0-255],[0-255]';
									divsForm[i].children[0].classList.add('error');
									divsForm[i].children[1].classList.add('border-red');
									return false;
								}
							}
						}
					}
					if (select.value === 'RGBA') {
						let code = divsForm[i].children[1].value;
						let codeArr = code.split(',');
						if (codeArr.length != 4) {
							divsForm[i].children[0].innerHTML = 'RGBA code must match the pattern \n [0-255],[0-255],[0-255],[0-1]';
							divsForm[i].children[0].classList.add('error');
							divsForm[i].children[1].classList.add('border-red');
							return false;
						} else {
							if (+codeArr[codeArr.length - 1] > 1 || +codeArr[codeArr.length - 1] < 0) {
								divsForm[i].children[0].innerHTML = 'RGBA code must match the pattern \n [0-255],[0-255],[0-255],[0-1]';
								divsForm[i].children[0].classList.add('error');
								divsForm[i].children[1].classList.add('border-red');
								return false
							}
							for (let j = 0; j < codeArr.length - 1; j++) {
								if (+codeArr[j] < 0 || +codeArr[j] > 255) {
									divsForm[i].children[0].innerHTML = 'RGBA code must match the pattern \n [0-255],[0-255],[0-255],[0-1]';
									divsForm[i].children[0].classList.add('error');
									divsForm[i].children[1].classList.add('border-red');
									return false;
								}
							}
						}
					}
					if (select.value === 'HEX') {
						let code = divsForm[i].children[1].value;
						if (code.length != 7) {
							divsForm[i].children[0].innerHTML = 'HEX code must contain a string length of at least 7 characters and the first character #, the following characters 1-9 and a-f!!!';
							divsForm[i].children[0].classList.add('error');
							divsForm[i].children[1].classList.add('border-red');
							return false;
						} else {
							if (code[0] !== '#') {
								divsForm[i].children[0].innerHTML = 'HEX code must contain a string length of at least 7 characters and the first character #, the following characters 1-9 and a-f!!!';
								divsForm[i].children[0].classList.add('error');
								divsForm[i].children[1].classList.add('border-red');
								return false;
							} else {
								for (let j = 1; j < code.length; j++) {
									if (this.colorHex.indexOf(code[j].toLowerCase()) === -1) {
										divsForm[i].children[0].innerHTML = 'HEX code must contain a string length of at least 7 characters and the first character #, the following characters 1-9 and a-f!!!';
										divsForm[i].children[0].classList.add('error');
										divsForm[i].children[1].classList.add('border-red');
										return false;
									}
								}
							}
						}
					}
				}
				divsForm[i].children[0].innerHTML = 'Code:';
				divsForm[i].children[0].classList.add('success');
				divsForm[i].children[1].classList.add('border-green');
			}
		}
		let objData = {}
		for (let i = 0; i < divsForm.length; i++) {
			objData[divsForm[i].children[1].name] = divsForm[i].children[1].value;
		}
		if (objData.type === 'HEX') {
			document.cookie = `${objData.color}=${objData.code}`;
		} else {
			document.cookie = `${objData.color}=${objData.type}(${objData.code})`;
		}
		for (let i = 0; i < divsForm.length; i++) {
			divsForm[i].children[0].removeAttribute("class");
			divsForm[i].children[1].removeAttribute("class");
			divsForm[i].children[1].value = '';
		}
		let divColors = document.getElementById('colors');
		let newDiv = document.createElement('div');
		newDiv.classList.add('new-div');
		if (objData.type === 'HEX') {
			newDiv.style.background = `${objData.code}`;
		} else {
			newDiv.style.background = `${objData.type}(${objData.code})`;
		}
		let divText = document.createElement('div');
		divText.classList.add('text-div');
		for (let key in objData) {
			let p = document.createElement('p');
			if (key === 'color') {
				p.innerHTML = objData[key].toUpperCase();
			} else {
				p.innerHTML = objData[key];
			}
			divText.append(p);
		}
		newDiv.append(divText);
		divColors.append(newDiv);
	}
	showColor = () => {
		let divColors = document.getElementById('colors');
		let strData = document.cookie;
		let arrData = [];
		if (strData.indexOf(';')) {
			arrData = strData.split(';');
		} else {
			arrData.push(strData);
		}
		for (let i = 0; i < arrData.length; i++) {
			let newDiv = document.createElement('div');
			newDiv.classList.add('new-div');
			let arrColor = arrData[i].split('=');
			if (arrColor[1].includes('#')) {
				newDiv.style.background = `${arrColor[1]}`;
			}
			if (arrColor[1].includes('RGB')) {
				newDiv.style.background = `${arrColor[1]}`;
			}
			if (arrColor[1].includes('RGBA')) {
				newDiv.style.background = `${arrColor[1]}`;
			}
			let divText = document.createElement('div');
			divText.classList.add('text-div');
			for (let j = 0; j < 3; j++) {
				let p = document.createElement('p');
				if (j === 0) {
					p.innerText = arrColor[0].toUpperCase();
				}
				if (j === 1) {
					if (arrColor[1].includes('#')) {
						p.innerText = 'HEX';
					} else if (arrColor[1].includes('RGB')) {
						p.innerText = 'RGB';
					} else if (arrColor[1].includes('RGBA')) {
						p.innerText = 'RGBA';
					}
				}
				if (j === 2) {
					p.innerText = arrColor[1];
				}
				divText.append(p);
			}
			newDiv.append(divText);
			divColors.append(newDiv);
		}
	}
}
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let colorHex = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const color = new Color(letters, colorHex);
color.showColor();

