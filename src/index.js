
import { API_KEY } from "../.env";
const lookup = require('country-code-lookup');







import { View } from "./js/View";
import { Controller } from "./js/Controller";

const app = new Controller(new View());
app.startApp();