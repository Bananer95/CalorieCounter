import * as closeEvent from './closingEvents.js';

export const btnCler = document.querySelector('button.btn_clear');
export const btnRes = document.querySelector('button.btn_calculation');

const links = document.getElementById('links');

function showBlock(block) {
  block.classList.add('show');
  btnCler.textContent = 'Закрыть';
}

function eventLinks() {
  links.addEventListener('click', (event) => {
    btnRes.setAttribute('disabled', 'disabled');

    switch (event.target.dataset.action) {
      case 'link_gender': {
        showBlock(closeEvent.gender);

        break;
      }
      case 'link_fisical': {
        showBlock(closeEvent.fisical);

        break;
      }

      case 'link_age': {
        showBlock(closeEvent.age);

        break;
      }

      case 'link_groth': {
        showBlock(closeEvent.groth);
        break;
      }

      case 'link_eight': {
        showBlock(closeEvent.eight);
        break;
      }
    }
  });
  return;
}

export { eventLinks, checkBtn };
