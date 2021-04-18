class Employee {
    constructor(name) {
        this.name = name;
    }
}

class EmpTable {
    constructor() {
        this.employees = [];

        for (var i = 1; i <= 10; i++) {
            this.employees.push(`employee${i}`);
        }
    }
    getHtml() {
        let root = document.createElement('div');
        root.id = 'root';
        root.style.width = '80%';
        root.style.margin = 'auto';
        document.body.append(root);
        let table = document.createElement('table');
        let caption = document.createElement('caption');
        caption.innerHTML = "Список працівників банку";
        table.style.border = '3px solid purple';
        table.style.textAlign = 'center';
        table.style.width = '100%';
        table.style.fontSize = '24px';
        table.style.borderSpacing = '5px';
        table.style.borderCollapse = 'separate';
        table.append(caption);
        let tr = document.createElement('tr');
        let thNumber = document.createElement('th');
        thNumber.style.padding = '20px';
        thNumber.style.border = '1px solid red';
        thNumber.innerHTML = "Номер";
        tr.append(thNumber)
        table.append(tr);
        let thName = document.createElement('th');
        thName.innerHTML = "Назва працівника";
        thName.style.padding = '20px';
        thName.style.border = '1px solid red';
        tr.append(thName);
        for (let i = 0; i < this.employees.length; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 2; j++) {
                let td = document.createElement('td');
                td.style.border = '1px solid red';
                td.style.padding = '20px';
                if (j === 0) {
                    td.innerHTML = i + 1;
                } else {
                    td.innerHTML = this.employees[i];
                }
                tr.append(td);
            }
            table.append(tr);
        }
        root.append(table);
    }
}

const empTable = new EmpTable();
empTable.getHtml();