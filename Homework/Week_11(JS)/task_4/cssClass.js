class CssClass {
	constructor(arrayStyles) {
		this.arrayStyles = arrayStyles;
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


