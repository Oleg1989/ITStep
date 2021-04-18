class CssClass {
	constructor(nameClass, arrayStyles) {
		this.nameClass = nameClass;
		this.arrayStyles = arrayStyles;
	}
	addingStyle(elem) {
		elem.classList.add(this.nameClass);
	}
	deleteStyle(elem) {
		elem.classList.remove(this.nameClass);
	}
	getCss() {
		let strCss = "<style>";
		for (let i = 0; i < arrayStyles.length; i++) {
			for (let key in arrayStyles[i]) {
				if (key === "id" || key === "tag") {
					continue;
				} else if (key === "nameClass") {
					strCss += `.${arrayStyles[i][key]} { \n `;
				} else {
					strCss += `  ${key}: ${arrayStyles[i][key]};\n `;
				}
			}
			strCss += "} \n"
		}
		strCss += " </style>"
		return strCss;
	}
}

let arrayStyles = [
	{
		"id": "wrapper",
		"nameClass": "wrap",
		"display": "flex"
	},
	{
		"tag": "div",
		"nameClass": "block",
		"width": "300px",
		"margin": "10px"
	},
	{
		"tag": "img",
		"nameClass": "img",
		"width": "100%"
	},
	{
		"tag": "p",
		"nameClass": "text",
		'text-align': "justify"
	}
];

const cssClass = new CssClass("wrap", arrayStyles);
document.write(cssClass.getCss());

let div = document.createElement("div");
div.id = "wrapper";
document.body.append(div);

//Додаємо клас 
cssClass.addingStyle(wrapper);
//Видаляємо клас
cssClass.deleteStyle(wrapper);
