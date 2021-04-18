class Element {
	divText;
	textarea;
	constructor(text) {
		this.text = text;
		//Створюємо div шапку
		let div = document.createElement('div');
		div.classList.add('div');
		let p1 = document.createElement('p');
		p1.innerHTML = 'Press Ctrl+E for edit text';
		div.append(p1);
		let p2 = document.createElement('p');
		p2.innerHTML = 'Press Ctrl+S for save text';
		div.append(p2);
		document.body.append(div);
		//Створюємо div з текстом
		this.divText = document.createElement('div');
		this.divText.id = 'text';
		this.divText.classList.add('div');
		this.divText.innerHTML = this.text;
		document.body.append(this.divText);
		//Створюємо textarea з текстом
		this.textarea = document.createElement('textarea');
		this.textarea.setAttribute('cols', '100');
		this.textarea.setAttribute('rows', '15');
		this.textarea.id = 'textarea';
		this.textarea.classList.add('textarea');
		this.textarea.classList.add('close');
		document.body.append(this.textarea);
		//Створюємо кнопку save
		let button = document.createElement('button');
		button.innerHTML = 'Save';
		button.id = 'btn';
		button.addEventListener('click', this.buttonClick);
		document.body.append(button);

		document.body.addEventListener('keydown', this.editSave);
	}

	editSave = (event) => {
		event.preventDefault();
		if (event.code === 'KeyE' && event.ctrlKey) {
			this.divText.classList.add('close');
			this.textarea.classList.remove('close');
			this.textarea.innerHTML = this.divText.innerHTML;
			document.body.removeEventListener('keydown', this.editSave);
		}
		// if (event.code === 'KeyS' && event.ctrlKey) {
		// 	this.divText.innerHTML = this.textarea.value;
		// 	this.textarea.classList.add('close');
		// 	this.divText.classList.remove('close');
		// }
	}

	buttonClick = (event) => {
		document.body.addEventListener('keydown', this.editSave);
		this.divText.innerHTML = this.textarea.value;
		this.textarea.classList.add('close');
		this.divText.classList.remove('close');
	}
}
let text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dicta recusandae in quisquam rerum est minus corporis dolor praesentium alias? Laudantium rem harum tenetur architecto, ducimus dolorum iure dicta obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dicta recusandae in quisquam rerum est minus corporis dolor praesentium alias? Laudantium rem harum tenetur architecto, ducimus dolorum iure dicta obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dicta recusandae in quisquam rerum est minus corporis dolor praesentium alias? Laudantium rem harum tenetur architecto, ducimus dolorum iure dicta obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dicta recusandae in quisquam rerum est minus corporis dolor praesentium alias? Laudantium rem harum tenetur architecto, ducimus dolorum iure dicta obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dicta recusandae in quisquam rerum est minus corporis dolor praesentium alias? Laudantium rem harum tenetur architecto, ducimus dolorum iure dicta obcaecati? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dicta recusandae in quisquam rerum est minus corporis dolor praesentium alias? Laudantium rem harum tenetur architecto, ducimus dolorum iure dicta obcaecati?";

const element = new Element(text);
