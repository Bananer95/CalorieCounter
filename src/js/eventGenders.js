const links = document.getElementById('links');
const gender = document.querySelector('div.container_genders');

function eventLinks() {
  links.addEventListener('click', (event) => {
    // const getGendr = event.target.closest('h5.link_gender');
    // gender.classList.add('show');
    switch (event.target.dataset.action) {
      case 'link_gender':
        gender.classList.add('show');
    }
  });
}

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

export { eventLinks, closingEventGenders };
