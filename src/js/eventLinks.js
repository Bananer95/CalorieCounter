import * as closeEvent from './closingEvents.js';
import { showBlock } from './helpers.js';

export const btnCler = document.querySelector('button.btn_clear');
export const btnRes = document.querySelector('button.btn_calculation');

const links = document.getElementById('links');

function stopDefAction(evt) {
  evt.preventDefault();
}

function eventLinks() {
  links.addEventListener('click', (event) => {
    const dataset = event.target.dataset.action;
    if (!dataset) return;

    switch (dataset) {
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
        stopDefAction;
        showBlock(closeEvent.eight);
        break;
      }
    }
  });
  return;
}

export default eventLinks;
