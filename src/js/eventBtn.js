import * as closing from './closingEvents.js';
import {
  showText,
  removeClass,
  enableButton,
  addClass,
  changeValue,
} from './helpers.js';
export const btnReult = document.querySelector('div.btn');
import { btnCler, btnRes } from './eventLinks';

const popatResult = document.getElementById('result');
const ageInput = document.querySelector('div.age_input>input');
const grothInput = document.querySelector('div.groth_input>input');
const eightInput = document.querySelector('div.eight_input>input');
const textAge = document.querySelector('div.link_age>h5');
const textGroth = document.querySelector('div.link_groth>h5');
const textEight = document.querySelector('div.link_eight>h5');
const resultNorma = document.querySelector('div.result_normal>p>span');
const resultUp = document.querySelector('div.result_up>p>span');
const resultDown = document.querySelector('div.result_down>p>span');

let age = localStorage.age ? JSON.parse(localStorage.age) : '';
let groth = localStorage.groth ? JSON.parse(localStorage.groth) : '';
let eight = localStorage.eight ? JSON.parse(localStorage.eight) : '';

if (age) {
  showText(textAge, `Вашь возраст: ${age} `);
  enableButton();
  changeValue(ageInput, age);
}
if (groth) {
  showText(textGroth, `Вашь рост: ${groth} `);
  enableButton();
  changeValue(grothInput, groth);
}
if (eight) {
  showText(textEight, `Вашь вес: ${eight} `);
  enableButton();
  changeValue(eightInput, eight);
}

function eventBtn() {
  btnReult.addEventListener('click', (event) => {
    const res = event.target.closest('button.btn_calculation');
    const claer = event.target.closest('button.btn_clear');
    let normal;
    let normalPlus;
    let normalMinus;

    if (btnCler.textContent === 'Очистить') {
      if (res) {
        addClass(popatResult, 'open');
        showText(btnCler, 'Закрыть');

        normal = Math.ceil(
          10 * Number(eightInput.value) +
            6.25 * Number(grothInput.value) -
            5 * Number(ageInput.value) +
            closing.sex
        );
        if (eightInput.value && grothInput.value && ageInput.value) {
          enableButton();
        }
        normalPlus = Math.ceil(normal + normal * 0.15);
        normalMinus = Math.floor(normal - normal * 0.15);

        showText(resultNorma, normal);
        showText(resultUp, normalPlus);
        showText(resultDown, normalMinus);

        localStorage.setItem('age', JSON.stringify(+ageInput.value));
        localStorage.setItem('groth', JSON.stringify(+grothInput.value));
        localStorage.setItem('eight', JSON.stringify(+eightInput.value));
      } else if (claer) {
        removeClass(popatResult, 'open');

        showText(closing.textGender, 'Выберите ваш пол');
        showText(closing.textFisical, `Выберите физическую активность`);
        showText(textAge, 'Укажите ваш возраст');
        showText(textEight, 'Укажите ваш вес');
        showText(textGroth, 'Укажите ваш рост');

        btnRes.setAttribute('disabled', 'disabled');

        localStorage.clear();

        ageInput.setAttribute('value', ''); // Перестали работать
        grothInput.setAttribute('value', '');
        eightInput.setAttribute('value', '');
        // changeValue  не работает функция
      }
    } else if (btnCler.textContent == 'Закрыть') {
      if (closing.age.classList.contains('show')) {
        removeClass(closing.age, 'show');
        showText(btnCler, 'Очистить');
        if (ageInput.value) {
          showText(textAge, `Вашь возраст: ${+ageInput.value}`);
        }
      } else if (closing.groth.classList.contains('show')) {
        removeClass(closing.groth, 'show');
        if (grothInput.value) {
          showText(textGroth, `Вашь рост: ${+grothInput.value}`);
        }

        showText(btnCler, 'Очистить');
      } else if (closing.eight.classList.contains('show')) {
        removeClass(closing.eight, 'show');

        if (eightInput.value) {
          showText(textEight, `Вашь вес: ${eightInput.value}`);
        }
        showText(btnCler, 'Очистить');
      } else if (popatResult.classList.contains('open')) {
        removeClass(popatResult, 'open');
        showText(btnCler, 'Очистить');
      }
    }
  });
}

export default eventBtn;
