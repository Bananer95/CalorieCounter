import * as closing from './closingEvents.js';
export const btnReult = document.querySelector('div.btn');

const ba = document.querySelector('button.btn_calculation');
const by = document.querySelector('button.btn_clear');
const popatResult = document.getElementById('result');
const age = document.querySelector('div.age_input>input');
const groth = document.querySelector('div.groth_input>input');
const eight = document.querySelector('div.eight_input>input');

let normal;
let normalPlus;
let normalMinus;

const resultNorma = document.querySelector('div.result_normal>p>span');
const resultUp = document.querySelector('div.result_up>p>span');
const resultDown = document.querySelector('div.result_down>p>span');

function eventBtn() {
  btnReult.addEventListener('click', (event) => {
    const btnRes = event.target.closest('button.btn_calculation');
    const btnCler = event.target.closest('button.btn_clear');
    const textAge = document.querySelector('div.link_age>h5');
    const textGroth = document.querySelector('div.link_groth>h5');
    const textEight = document.querySelector('div.link_eight>h5');

    if (by.textContent === 'Очистить') {
      if (btnRes) {
        popatResult.classList.add('open');

        normal = Math.ceil(
          10 * Number(eight.value) +
            6.25 * Number(groth.value) -
            5 * Number(age.value) +
            closing.sex
        );
        normalPlus = Math.ceil(normal + normal * 0.15);
        normalMinus = Math.floor(normal - normal * 0.15);

        resultNorma.textContent = normal;
        resultUp.textContent = normalPlus;
        resultDown.textContent = normalMinus;
      } else if (btnCler) {
        popatResult.classList.remove('open');
      }
    } else if (by.textContent == 'Закрыть') {
      if (closing.age.classList.contains('show')) {
        closing.age.classList.remove('show');
        by.textContent = 'Очистить';
        ba.removeAttribute('disabled');
        textAge.textContent = `Вашь возраст: ${age.value} `;
      } else if (closing.groth.classList.contains('show')) {
        closing.groth.classList.remove('show');
        by.textContent = 'Очистить';
        ba.removeAttribute('disabled');
        textGroth.textContent = `Вашь рост: ${groth.value} `;
      } else if (closing.eight.classList.contains('show')) {
        closing.eight.classList.remove('show');
        by.textContent = 'Очистить';
        ba.removeAttribute('disabled');
        textEight.textContent = `Вашь вес: ${eight.value} `;
      }
    }
  });
}

export default eventBtn;
