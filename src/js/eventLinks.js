import * as closeEvent from './closingEvents.js';
import { showBlock } from './helpers.js';

export const btnCler = document.querySelector('button.btn_clear');
export const btnRes = document.querySelector('button.btn_calculation');

const links = document.getElementById('links');

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

export default eventLinks;
