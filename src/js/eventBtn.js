import * as closing from './closingEvents.js';
export const btnReult = document.querySelector('div.btn');

const ba = document.querySelector('button.btn_calculation');
const by = document.querySelector('button.btn_clear');
const popatResult = document.getElementById('result');
const ageInput = document.querySelector('div.age_input>input');
const grothInput = document.querySelector('div.groth_input>input');
const eightInput = document.querySelector('div.eight_input>input');
const textAge = document.querySelector('div.link_age>h5');
const textGroth = document.querySelector('div.link_groth>h5');
const textEight = document.querySelector('div.link_eight>h5');

let age = localStorage.age ? JSON.parse(localStorage.age) : '';
let groth = localStorage.groth ? JSON.parse(localStorage.groth) : '';
let eight = localStorage.eight ? JSON.parse(localStorage.eight) : '';

if (age) {
  textAge.textContent = `Вашь возраст: ${age} `;
} else {
  textAge.textContent = 'Укажите ваш возраст';
}

if (groth) {
  textGroth.textContent = `Вашь рост: ${groth} `;
} else {
  textGroth.textContent = 'Укажите ваш рост';
}

if (eight) {
  textEight.textContent = `Вашь вес: ${eight} `;
}

const resultNorma = document.querySelector('div.result_normal>p>span');
const resultUp = document.querySelector('div.result_up>p>span');
const resultDown = document.querySelector('div.result_down>p>span');

function eventBtn() {
  btnReult.addEventListener('click', (event) => {
    const btnRes = event.target.closest('button.btn_calculation');
    const btnCler = event.target.closest('button.btn_clear');
    let normal;
    let normalPlus;
    let normalMinus;

    if (by.textContent === 'Очистить') {
      if (btnRes) {
        popatResult.classList.add('open');

        by.textContent = 'Закрыть';

        normal = Math.ceil(
          10 * Number(eightInput.value) +
            6.25 * Number(grothInput.value) -
            5 * Number(ageInput.value) +
            closing.sex
        );
        normalPlus = Math.ceil(normal + normal * 0.15);
        normalMinus = Math.floor(normal - normal * 0.15);

        resultNorma.textContent = normal;
        resultUp.textContent = normalPlus;
        resultDown.textContent = normalMinus;

        localStorage.setItem('age', JSON.stringify(+ageInput.value));
        localStorage.setItem('groth', JSON.stringify(+grothInput.value));
        localStorage.setItem('eight', JSON.stringify(+eightInput.value));
      } else if (btnCler) {
        popatResult.classList.remove('open');

        closing.textGender.textContent = 'Выберите ваш пол';
        textAge.textContent = 'Укажите ваш возраст';
        textEight.textContent = 'Укажите ваш вес';
        textGroth.textContent = 'Укажите ваш рост';
        closing.textFisical.textContent = `Выберите физическую активность`;

        eight.value = '';
        groth.value = '';
        age.value = '';

        closing.sex = ''; // не изменяет переменную
        ba.setAttribute('disabled', 'disabled');

        localStorage.clear();
      }
    } else if (by.textContent == 'Закрыть') {
      if (closing.age.classList.contains('show')) {
        closing.age.classList.remove('show');

        by.textContent = 'Очистить';
        if (ageInput.value) {
          textAge.textContent = `Вашь возраст: ${+ageInput.value} `;
        }

        ba.removeAttribute('disabled');
      } else if (closing.groth.classList.contains('show')) {
        closing.groth.classList.remove('show');

        if (grothInput.value) {
          textGroth.textContent = `Вашь рост: ${grothInput.value} `;
        }
        by.textContent = 'Очистить';

        ba.removeAttribute('disabled');
      } else if (closing.eight.classList.contains('show')) {
        closing.eight.classList.remove('show');

        if (eightInput.value) {
          textEight.textContent = `Вашь вес: ${eightInput.value} `;
        }
        by.textContent = 'Очистить';

        ba.removeAttribute('disabled');
      } else if (popatResult.classList.contains('open')) {
        popatResult.classList.remove('open');

        by.textContent = 'Очистить';
      }
    }
  });
}

export default eventBtn;
