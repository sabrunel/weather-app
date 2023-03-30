
import { API_KEY } from "../.env";


/*
MODEL

Write query
Store data
Extract relevant info from data
*/

class Model {
    constructor(query) {
        this.query = query;
    }

    async getData() {
        try {
            const options =  { mode: 'cors'};
            const response = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${this.query}&aqi=no`,
                options
            );
            const result = await response.json();
            this.data = result.current;
        } catch (error) {
            console.log(error);
        }
    }
}


/*
VIEW

Define UI elements
Get user input
Render data
Clear user input
Clear screen
*/

class View {
    constructor() {
        this.searchBtn = document.getElementById("search-btn");
        this.searchTxt = document.getElementById("search-txt");
    }

    get userInput() {
        return this.searchTxt.value; 
    }

    set currentTemp(currentTemp) {
        document.getElementById("current-temp").innerText = currentTemp;
    }

    set currentCity(currentCity) {
        document.getElementById("current-city").innerText = currentCity;
    }

    clearUserInput() {
        this.searchTxt.value = "";
    }
}


/*
CONTROLLER

Get search input from View
Get query from Model
Trigger search
Trigger result rendering
*/

class Controller {
    constructor(view) {
        this.view = view;
    }

    async searchHandler() {
        const query = this.view.userInput;

        if (query) {
            this.model = new Model(query);
            this.view.clearUserInput();

            try {
                await this.model.getData();

                this.view.currentCity = `${query}`;
                const currentTempC = this.model.data.temp_c;
                this.view.currentTemp = `${currentTempC} °C`;

            } catch (error) {
                console.log(error);
            }
        }
    }

    startApp() {
        this.view.searchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.searchHandler();
        })
    }
}

const app = new Controller(new View());
app.startApp();