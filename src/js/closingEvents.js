import { btnCler, btnRes } from './eventLinks.js';
import { showText, removeClass, enableButton } from './helpers.js';

export const gender = document.querySelector('div.container_genders');
export const age = document.querySelector('div.container_age');
export const groth = document.querySelector('div.container_groth');
export const fisical = document.querySelector('div.container_fisical');
export const eight = document.querySelector('div.container_eight');
export const textGender = document.querySelector('div.link_gender>h5');
export const textFisical = document.querySelector('div.link_fisical>h5');

export let fis = localStorage.fisical ? JSON.parse(localStorage.fisical) : '';
export let sex = localStorage.obj ? JSON.parse(localStorage.obj) : '';

if (sex === 5) {
  showText(textGender, 'Ваш пол: Мужской');
} else if (sex === -161) {
  showText(textGender, 'Ваш пол: Женский');
}

// Gender

function closingEventGenders() {
  gender.addEventListener('click', (event) => {
    const man = event.target.closest('div.man');
    const woman = event.target.closest('div.woman');

    if (man) {
      removeClass(gender, 'show');
      showText(textGender, 'Ваш пол: Мужской');
      showText(btnCler, 'Очистить');

      sex = 5;

      localStorage.setItem('obj', JSON.stringify(sex));
    } else if (woman) {
      removeClass(gender, 'show');
      showText(textGender, 'Ваш пол: Женсикй');
      showText(btnCler, 'Очистить');

      sex = -161;

      localStorage.setItem('obj', JSON.stringify(sex));
    }
  });
}

//  Fisical

if (fis == 1) {
  showText(textFisical, 'Ваша физ.активность: Минимальная');
} else if (fis == 2) {
  showText(textFisical, 'Ваша физ.активность: Низкая');
} else if (fis == 3) {
  showText(textFisical, 'Ваша физ.активность: Средняя');
} else if (fis == 4) {
  showText(textFisical, 'Ваша физ.активность: Высокая');
} else if (fis == 5) {
  showText(textFisical, 'Ваша физ.активность: Очень высокая');
}

// При клике на текст не срабатывает действие

function closingEventFisical() {
  fisical.addEventListener('click', (event) => {
    const fisicalBox = event.target.closest('.fisical_box');
    if (!fisicalBox) return;

    switch (fisicalBox.dataset.revie) {
      case 'minimal': {
        showText(textFisical, 'Ваша физ.активность: Минимальная');
        showText(btnCler, 'Очистить');
        localStorage.setItem('fisical', JSON.stringify(1));

        break;
      }

      case 'low': {
        showText(textFisical, 'Ваша физ.активность: Низкая');
        showText(btnCler, 'Очистить');
        localStorage.setItem('fisical', JSON.stringify(2));

        break;
      }
      case 'average': {
        showText(textFisical, 'Ваша физ.активность: Средняя');
        showText(btnCler, 'Очистить');
        localStorage.setItem('fisical', JSON.stringify(3));

        break;
      }

      case 'high': {
        showText(textFisical, 'Ваша физ.активность: Высокая');
        showText(btnCler, 'Очистить');
        localStorage.setItem('fisical', JSON.stringify(4));

        break;
      }

      case 'veryHigh': {
        showText(textFisical, 'Ваша физ.активность: Очень высокая');
        showText(btnCler, 'Очистить');
        localStorage.setItem('fisical', JSON.stringify(5));

        break;
      }
    }
    removeClass(fisical, 'show');
  });
}

export { closingEventGenders, closingEventFisical };
