import * as closeEvent from './closingEvents.js';

const btnCler = document.querySelector('button.btn_clear');
const btnRes = document.querySelector('button.btn_calculation');

// export let checkPoitn = 0;

// function checkBtn(checkPoitn) {
//   if (checkPoitn === 1) {
//     btnRes.textContent = 'Сохранить';
//     btnCler.textContent = 'Закрыть';
//   } else {
//     btnRes.textContent = 'Расcчитать';
//     btnCler.textContent = 'Очистить';
//   }
// }

const links = document.getElementById('links');

function eventLinks() {
  links.addEventListener('click', (event) => {
    btnRes.setAttribute('disabled', 'disabled');

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
        btnCler.textContent = 'Закрыть';

        break;
      }

      case 'link_groth': {
        closeEvent.groth.classList.add('show');
        btnCler.textContent = 'Закрыть';
        break;
      }

      case 'link_eight': {
        closeEvent.eight.classList.add('show');
        btnCler.textContent = 'Закрыть';
        break;
      }
    }
  });
  return;
}

export { eventLinks, checkBtn };
