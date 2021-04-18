class Table {
	constructor(arrPoeple){
		this.arrPoeple = arrPoeple;
		
		let root = document.createElement('root');
		root.id = 'root';
		let table = document.createElement('table');
		let trHead = document.createElement('tr');
		for(let key in this.arrPoeple[0]){
			let th = document.createElement('th');
			th.innerHTML = key;
			trHead.append(th);
		}
		trHead.addEventListener('click', this.sortTable);
		table.append(trHead);
		for(let i = 0; i < this.arrPoeple.length; i++){
			let trBody = document.createElement('tr');
			for(let key in this.arrPoeple[i]){
				let td = document.createElement('td');
				td.innerHTML = this.arrPoeple[i][key];
				trBody.append(td);
			}
			table.append(trBody);
		}
		root.append(table);
		document.body.append(root);
	}
	sortTable = (event) => {
		let name = event.target.innerHTML;
		this.arrPoeple = _.sortBy(this.arrPoeple, [name]);
		let arrTr = document.getElementsByTagName('tr');
		for(let i = 0; i < this.arrPoeple.length; i++){
			let j = 0;
			for(let key in this.arrPoeple[i]){
				arrTr[i + 1].childNodes[j].innerHTML = this.arrPoeple[i][key];
				j++;
			}		
		}
	}
}

let arrPoeple = [
	{FirstName: 'Mark', LastName: 'Zuckerberg', Age: 34, Company: 'Facebook'},
	{FirstName: 'Bill', LastName: 'Gates', Age: 62, Company: 'Microsoft'},
	{FirstName: 'Larry', LastName: 'Page', Age: 45, Company: 'Google'},
	{FirstName: 'Timothy', LastName: 'Cook', Age: 57, Company: 'Apple'}
 ];

const table = new Table(arrPoeple);	

