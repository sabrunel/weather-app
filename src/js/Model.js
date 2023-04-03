import { API_KEY } from "../../.env";
const lookup = require("country-code-lookup");

export class Model {
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
            this.current_data = result.current;
            this.location_data = result.location;
        } catch (error) {
            console.log(error);
        }
    }

    get countryFIPS() {
        if (this.location_data.country === "United States of America") {
            return lookup.byCountry("United States").fips;
        } else {
            return lookup.byCountry(this.location_data.country).fips;
        }
    }

    get windSpeedKPH() {
        return this.current_data.wind_kph;
    }

    get currTempC() {
        return this.current_data.temp_c;
    }
}