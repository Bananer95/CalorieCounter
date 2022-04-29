function eventBtn() {
  const popatResult = document.getElementById('result');
  const btnReult = document.querySelector('div.btn');

  btnReult.addEventListener('click', (event) => {
    const btnRes = event.target.closest('button.btn_calculation');
    const btnCler = event.target.closest('button.btn_clear');
    if (btnRes) {
      popatResult.classList.add('open');
    } else if (btnCler) {
      popatResult.classList.remove('open');
    }
  });
}

eventBtn();
