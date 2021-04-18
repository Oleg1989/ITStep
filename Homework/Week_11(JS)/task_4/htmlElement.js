class HTMLElement {
    nameTag;
    tagType;
    content;
    constructor(arrayAttributes, arrayStyles, arrayTags) {
        this.arrayAttributes = arrayAttributes;
        this.arrayStyles = arrayStyles;
        this.arrayTags = arrayTags;

        this.nameTag = document.createElement("div");
        this.nameTag.id = "wrapper";
    }
    getAttributes(elem) {
        let elements = elem.getElementsByTagName("*");
        for (let i = 0; i < this.arrayAttributes.length; i++) {
            for (let j = 0; j < elements.length; j++) {
                if (this.arrayAttributes[i].tag === elements[j].localName) {
                    for (let key in this.arrayAttributes[i]) {
                        if (key === "tag") {
                            continue;
                        } else {
                            elements[j].setAttribute(key, arrayAttributes[i][key]);
                        }
                    }
                }
            }
        }
    }
    getStyles(elem) {
        let elements = elem.getElementsByTagName("*");
        for (let i = 0; i < this.arrayStyles.length; i++) {
            for (let j = 0; j < elements.length; j++) {
                if (this.arrayStyles[i]["id"] === elements[j].id) {
                    elements[j].classList.add(this.arrayStyles[i]["nameClass"]);
                    break;
                } else if (this.arrayStyles[i]["tag"] === elements[j].localName && elements[j].id === "") {
                    for (let key in this.arrayStyles[i]) {
                        if (key === "nameClass") {
                            elements[j].classList.add(this.arrayStyles[i][key]);
                        }
                    }
                }
            }
        }
    }
    appendToTheEnd() {
        for (let i = 0; i < this.arrayTags.length; i++) {
            let tag = document.createElement(this.arrayTags[i].nameTag);
            tag.innerHTML = this.arrayTags[i].content;
            this.nameTag.append(tag);
            if (this.arrayTags[i].tags) {
                for (let j = 0; j < this.arrayTags[i].tags.length; j++) {
                    let newTag = document.createElement(this.arrayTags[i].tags[j].nameTag);
                    newTag.innerHTML = this.arrayTags[i].tags[j].content;
                    tag.append(newTag);
                    if (this.arrayTags[i].tags[j].tags) {
                        for (let a = 0; a < this.arrayTags[i].tags[j].tags.length; a++) {
                            let nextTag = document.createElement(this.arrayTags[i].tags[j].tags[a].nameTag);
                            nextTag.innerHTML = this.arrayTags[i].tags[j].tags[a].content;
                            newTag.append(nextTag);
                        }
                    }
                }
            }
        }
    }
    getHtml(htmlElement) {
        let divBody = document.createElement("body");
        divBody.append(this.nameTag);
        for (let i = 0; i < 4; i++) {
            htmlElement.appendToTheEnd();
        }
        htmlElement.getAttributes(divBody);
        htmlElement.getStyles(divBody);
        let strHTML = divBody.innerHTML;

        return strHTML;
    }
}

