export class Element {
    constructor(element, attributes = {}, children = []) {
        this.element = element;
        this.attributes = attributes;
        this.children = children;
    }

    setTextContent(textContent) {
        this.textContent = textContent;
        return this;
    }

    render() {
        let DOMElement = document.createElement(this.element);

        for (const k of Object.keys(this.attributes)) {
            DOMElement.setAttribute(k, this.attributes[k]);
        }

        // Append children Element or Text nodes
        if (this.textContent === undefined) {
            for (const child of this.children) {
                DOMElement.appendChild(child.render());
            } 
        } else {
            const textNode = document.createTextNode(this.textContent);
            DOMElement.appendChild(textNode);
        }
        return DOMElement;
    }
}