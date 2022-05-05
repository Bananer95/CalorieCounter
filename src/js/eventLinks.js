import * as closeEvent from './closingEvents.js';
import * as btnEvent from './eventBtn.js';

const btnRes = document.querySelector('button.btn_calculation');
const btnCler = document.querySelector('button.btn_clear');

export let checkPoitn = 0;

function checkBtn() {
  if (checkPoitn === 1) {
    btnRes.textContent = 'Сохранить';
    btnCler.textContent = 'Закрыть';
  } else {
    btnRes.textContent = 'Расcчитать';
    btnCler.textContent = 'Очистить';
  }
}

const links = document.getElementById('links');

function eventLinks() {
  links.addEventListener('click', (event) => {
    checkPoitn = 1;
    checkBtn();

    switch (event.target.dataset.action) {
      case 'link_gender': {
        closeEvent.gender.classList.add('show');

        break;
      }
      case 'link_fisical': {
        closeEvent.fisical.classList.add('show');

        break;
      }

      case 'link_age': {
        closeEvent.age.classList.add('show');

        break;
      }

      case 'link_groth': {
        closeEvent.groth.classList.add('show');
        break;
      }

      case 'link_eight': {
        closeEvent.eight.classList.add('show');
        break;
      }
    }
  });
  return;
}

export { eventLinks, checkBtn };
