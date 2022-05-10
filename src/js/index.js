import eventBtn from './eventBtn.js';
import eventLinks from './eventLinks.js';
import { closingEventGenders, closingEventFisical } from './closingEvents.js';
import * as B from './api.js';

eventBtn();
eventLinks();
closingEventGenders();
closingEventFisical();

let banan;

fetch(B.URL)
  .then((response) => response.json())
  .then((data) =>
    console.log(
      'Калорийность банана в идеальном состоянии:',
      data.foodNutrients[2].amount
    )
  );

// Не получаеться задать переменной значение из ответа  от api
