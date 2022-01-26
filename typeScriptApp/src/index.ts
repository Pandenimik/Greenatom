import { User } from './User';
import { Company } from './Company';
import ymaps from 'yandex-maps';

const user = new User();

const company = new Company();

ymaps.ready(init);
let myMap;
function init() {
  myMap = new ymaps.Map('map', {
    center: [55.76, 37.64],
    zoom: 7,
  });
}
