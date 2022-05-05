import { eventLinks, checkBtn, checkPoitn } from './eventLinks.js';
import * as closing from './closingEvents.js';

const ba = document.querySelector('button.btn_calculation');
const by = document.querySelector('button.btn_clear');

const popatResult = document.getElementById('result');
export const btnReult = document.querySelector('div.btn');

function eventBtn() {
  btnReult.addEventListener('click', (event) => {
    const btnRes = event.target.closest('button.btn_calculation');
    const btnCler = event.target.closest('button.btn_clear');

    if (checkPoitn === 0) {
      if (btnRes) {
        popatResult.classList.add('open');
      } else if (btnCler) {
        popatResult.classList.remove('open');
      }
    } else {
      if (closing.age.classList.contains('show')) {
        if (btnCler) {
          closing.age.classList.remove('show');
          checkPoitn = 1;
          checkBtn();
        }
      }
    }
  });
}

export default eventBtn;
