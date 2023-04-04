import { Model } from "./Model";

export class Controller {
    constructor(view) {
        this.view = view;
    }

    async searchHandler() {
        const query = this.view.userInput;

        if (query) {
            this.model = new Model(query);
            this.view.clearUserInput();
            this.view.clearErrorText();
            this.view.clearContent();

            try {
                await this.model.getData();

                this.view.renderContent();

                this.view.currentLocation = `${this.model.location_data.name} - ${this.model.countryFIPS}`;
                this.view.currentTemp = `${this.model.currTempC} °C`;
                this.view.currentCondition = `${this.model.current_data.condition.text}`;
                this.view.windSpeed = `${this.model.windSpeedKPH} km/h`;
                this.view.humidity = `${this.model.current_data.humidity} %`;

            } catch (error) {
                this.view.clearContent();

                if (error instanceof TypeError) {
                    this.view.showErrorText("This location cannot be found");
                } else {
                    console.log(error);
                }
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