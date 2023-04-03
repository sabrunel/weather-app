import { Element } from "./Element";

export class View {
    constructor() {
        this.appContainer = document.querySelector("main");
        this.searchBtn = document.getElementById("search-btn");
        this.searchTxt = document.getElementById("search-txt");
    }

    get userInput() {
        return this.searchTxt.value; 
    }

    set currentLocation(currentLocation) {
        document.getElementById("current-location").innerText = currentLocation;
    }

    set currentTemp(currentTemp) {
        document.getElementById("current-temp").innerText = currentTemp;
    }

    set currentCondition(currentCondition) {
        document.getElementById("current-condition").innerText = currentCondition;
    }

    set windSpeed(windSpeed) {
        document.getElementById("wind-speed").innerText = windSpeed;
    }

    set humidity(humidity) {
        document.getElementById("humidity").innerText = humidity;
    }


    clearUserInput() {
        this.searchTxt.value = "";
    }

    clearContent() {
        while (this.appContainer.firstChild) {
            this.appContainer.removeChild(this.appContainer.lastChild);
        }
    }

    renderContent() {
        const content = new Element("div", {class: "content"}, [
            new Element("div", {class:"main-widget"}, [
                new Element("p", {id:"current-location"}),
                new Element("h1", {id:"current-temp"}),
                new Element("h2", {id:"current-condition"}),
            ]),
            new Element("div", {class:"secondary-widget"}, [
                new Element("div", {class:"text-group"}, [
                    new Element("p", {class:"label"}).setTextContent("Wind speed"),
                    new Element("p", {class:"text", id:"wind-speed"}),
                ]),
                new Element("div", {class:"text-group"}, [
                    new Element("p", {class:"label"}).setTextContent("Humidity"),
                    new Element("p", {class:"text", id:"humidity"}),
                ])
            ])
        ])
    this.appContainer.appendChild(content.render());
    }

    showErrorText(error) {
        document.getElementById("error-txt").innerText = error;
    }

    clearErrorText() {
        document.getElementById("error-txt").innerText = "";
    }
}