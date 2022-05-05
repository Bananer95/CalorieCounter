export const gender = document.querySelector('div.container_genders');
export const age = document.querySelector('div.container_age');
export const groth = document.querySelector('div.container_groth');
export const fisical = document.querySelector('div.container_fisical');
export const eight = document.querySelector('div.container_eight');

// Gender

function closingEventGenders() {
  const text = document.querySelector('div.link_gender>h5');

  gender.addEventListener('click', (event) => {
    const man = event.target.closest('div.man');
    const woman = event.target.closest('div.woman');

    if (man) {
      gender.classList.remove('show');
      text.textContent = 'Ваш пол: Мужской';
    } else if (woman) {
      gender.classList.remove('show');
      text.textContent = 'Ваш пол: Женский';
    }
  });
}

//  Fisical

function closingEventFisical() {
  const text = document.querySelector('div.link_fisical>h5');

  fisical.addEventListener('click', (event) => {
    switch (event.target.dataset.revie) {
      case 'minimal': {
        text.textContent = 'Ваша физ.активность: Минимальная';

        break;
      }

      case 'low': {
        text.textContent = 'Ваша физ.активность: Низкая ';

        break;
      }
      case 'average': {
        text.textContent = 'Ваша физ.активность: Среднее ';

        break;
      }

      case 'high': {
        text.textContent = 'Ваша физ.активность: Высокая ';

        break;
      }

      case 'veryHigh': {
        text.textContent = 'Ваша физ.активность: Очень высокая ';

        break;
      }
    }

    fisical.classList.remove('show');
  });
}

export { closingEventGenders, closingEventFisical };
