class HTMLElement {
    nameTag;
    tagType;
    content;
    constructor(arrayAttributes, arrayStyles, arrayTags) {
        this.arrayAttributes = arrayAttributes;
        this.arrayStyles = arrayStyles;
        this.arrayTags = arrayTags;
        console.log("Створено HTML element!");

        this.nameTag = document.createElement("div");
        this.nameTag.id = "wrapper";
        this.nameTag.style.display = "flex";
    }
    getAttributes() {
        let elements = wrapper.getElementsByTagName("*");
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
    getStyles() {
        let elements = wrapper.getElementsByTagName("*");
        for (let i = 0; i < this.arrayStyles.length; i++) {
            for (let j = 0; j < elements.length; j++) {
                if (this.arrayStyles[i].tag === elements[j].localName) {
                    let newStyle = "";
                    for (let key in this.arrayStyles[i]) {
                        if (key === "tag") {
                            continue;
                        } else {
                            newStyle += `${key}:${this.arrayStyles[i][key]};`;
                        }
                    }
                    elements[j].style.cssText = newStyle;
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
    addingToTheBeginning() {
        for (let i = 0; i < this.arrayTags.length; i++) {
            let tag = document.createElement(this.arrayTags[i].nameTag);
            tag.innerHTML = this.arrayTags[i].content;
            this.nameTag.prepend(tag);
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
    getHTML() {
        let divBody = document.createElement("body");
        divBody.append(this.nameTag);
        let strHTML = divBody.innerHTML;
        return strHTML;
    }
}

let arrayAttributes = [
    {
        "tag": "img",
        "src": "lipsum.jpg",
        "alt": "Lorem Ipsun"
    },
    {
        "tag": "a",
        "href": "https://www.lipsum.com",
        "target": "_blank"
    }

];
let arrayStyles = [
    {
        "tag": "div",
        "width": "300px",
        "margin": "10px"
    },
    {
        "tag": "img",
        "width": "100%"
    },
    {
        "tag": "p",
        'text-align': "justify"
    }
];
let arrayTags = [
    {
        nameTag: "div",
        tagType: false,
        content: "",
        tags: [
            {
                nameTag: "h3",
                tagType: false,
                content: "Lorem ipsum dolor"
            },
            {
                nameTag: "img",
                tagType: true,
                content: ""
            },
            {
                nameTag: "p",
                tagType: false,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium repellendus reprehenderit explicabo quod odi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium repellendus reprehenderit explicabo quod odi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium repellendus reprehenderit explicabo quod odi",
                tags: [
                    {
                        nameTag: "a",
                        tagType: false,
                        content: "More..."
                    }
                ]
            }
        ]
    }

];

const htmlElement = new HTMLElement(arrayAttributes, arrayStyles, arrayTags);
for (let i = 0; i < 2; i++) {
    htmlElement.appendToTheEnd();
    htmlElement.addingToTheBeginning();
}
document.write(htmlElement.getHTML());
htmlElement.getAttributes();
htmlElement.getStyles();
