class HtmlBlock {
    constructor(arrayAttributes, arrayStyles, arrayTags) {
        const cssClass = new CssClass(arrayStyles);
        this.styleCollection = cssClass.getCss();
        const htmlElement = new HTMLElement(arrayAttributes, arrayStyles, arrayTags);
        this.rootElement = htmlElement.getHtml(htmlElement);
    }
    getCode() {
        return this.styleCollection + this.rootElement;
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

const htmlBlock = new HtmlBlock(arrayAttributes, arrayStyles, arrayTags);
document.write(htmlBlock.getCode());