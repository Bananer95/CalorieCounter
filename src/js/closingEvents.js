import { btnCler, btnRes } from './eventLinks.js';

export const gender = document.querySelector('div.container_genders');
export const age = document.querySelector('div.container_age');
export const groth = document.querySelector('div.container_groth');
export const fisical = document.querySelector('div.container_fisical');
export const eight = document.querySelector('div.container_eight');
export const textGender = document.querySelector('div.link_gender>h5');
export const textFisical = document.querySelector('div.link_fisical>h5');

export let sex = localStorage.obj ? JSON.parse(localStorage.obj) : '';

if (sex === 5) {
  textGender.textContent = 'Ваш пол: Мужской';
} else if (sex === -161) {
  textGender.textContent = 'Ваш пол: Женский';
}

// Gender

function closingEventGenders() {
  gender.addEventListener('click', (event) => {
    const man = event.target.closest('div.man');
    const woman = event.target.closest('div.woman');

    if (man) {
      gender.classList.remove('show');

      textGender.textContent = 'Ваш пол: Мужской';
      btnCler.textContent = 'Очистить';

      sex = 5;

      btnRes.removeAttribute('disabled');
      localStorage.setItem('obj', JSON.stringify(sex));
    } else if (woman) {
      gender.classList.remove('show');
      textGender.textContent = 'Ваш пол: Женский';
      sex = -161;
      console.log(sex);
      btnRes.removeAttribute('disabled');
      btnCler.textContent = 'Очистить';
      localStorage.setItem('obj', JSON.stringify(sex));
    }
  });
}

//  Fisical

let fis = localStorage.fisical ? JSON.parse(localStorage.fisical) : '';

if (fis == 1) {
  textFisical.textContent = 'Ваша физ.активность: Минимальная';
} else if (fis == 2) {
  textFisical.textContent = 'Ваша физ.активность: Низкая ';
} else if (fis == 3) {
  textFisical.textContent = 'Ваша физ.активность: Средняя';
} else if (fis == 4) {
  textFisical.textContent = 'Ваша физ.активность: Высокая';
} else if (fis == 5) {
  textFisical.textContent = 'Ваша физ.активность: Очень высокая';
}

function closingEventFisical() {
  fisical.addEventListener('click', (event) => {
    switch (event.target.dataset.revie) {
      case 'minimal': {
        textFisical.textContent = 'Ваша физ.активность: Минимальная';
        btnCler.textContent = 'Очистить';

        localStorage.setItem('fisical', JSON.stringify(1));

        break;
      }

      case 'low': {
        textFisical.textContent = 'Ваша физ.активность: Низкая ';
        btnCler.textContent = 'Очистить';

        localStorage.setItem('fisical', JSON.stringify(2));

        break;
      }
      case 'average': {
        textFisical.textContent = 'Ваша физ.активность: Средняя ';
        btnCler.textContent = 'Очистить';

        localStorage.setItem('fisical', JSON.stringify(3));

        break;
      }

      case 'high': {
        textFisical.textContent = 'Ваша физ.активность: Высокая ';
        btnCler.textContent = 'Очистить';

        localStorage.setItem('fisical', JSON.stringify(4));

        break;
      }

      case 'veryHigh': {
        textFisical.textContent = 'Ваша физ.активность: Очень высокая ';
        btnCler.textContent = 'Очистить';

        localStorage.setItem('fisical', JSON.stringify(5));

        break;
      }
    }

    fisical.classList.remove('show');
    btnRes.removeAttribute('disabled');
  });
}

export { closingEventGenders, closingEventFisical };
