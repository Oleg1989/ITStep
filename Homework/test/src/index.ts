import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { Model } from "./model";
import { View } from "./view";
import { Controller } from "./controller";

const controller = new Controller(new View(), new Model());