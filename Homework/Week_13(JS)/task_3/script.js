class Event {
	start;
	stop;
	constructor(root) {
		this.rootArr = root.getElementsByTagName('li');
	}
	clickBag = (event) => {
		//Якщо зажито Ctrl або Shhift
		if (event.ctrlKey || event.shiftKey) {
			if (event.ctrlKey) {
				event.target.classList.toggle('bag');
				for (let i = 0; i < this.rootArr.length; i++) {
					if (this.rootArr[i].classList[0] === 'bag') {
						this.start = i;
					}
				}
			}
			if (event.shiftKey) {
				event.target.classList.add('bag')
				for (let i = 0; i < this.rootArr.length; i++) {
					if (this.rootArr[i].classList[0] === 'bag') {
						this.stop = i;
					}
				}
				if (this.start < this.stop) {
					for (let i = this.start; i <= this.stop; i++) {
						this.rootArr[i].classList.add('bag');
					}
				} else {
					for (let i = this.stop; i <= this.start; i++) {
						this.rootArr[i].classList.add('bag');
					}
				}
			}
			//Добаляэмо або видаляємо колір
		} else {
			for (let i = 0; i < this.rootArr.length; i++) {
				this.rootArr[i].classList.remove('bag');
			}
			event.target.classList.add('bag');
			for (let i = 0; i < this.rootArr.length; i++) {
				if (this.rootArr[i].classList[0] === 'bag') {
					this.start = i;
				}
			}
		}
	}
}

let root = document.getElementById('root');
const even = new Event(root);
root.addEventListener('click', even.clickBag);

