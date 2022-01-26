"use strict";
export const __esModule = true;
import { User } from "./User";
import { Company } from "./Company";
import yandex_maps_1 from "yandex-maps";
var user = new User();
var company = new Company();
yandex_maps_1["default"].ready(init);
var myMap;
function init() {
    myMap = new yandex_maps_1["default"].Map('map', {
        center: [55.76, 37.64],
        zoom: 7
    });
}
