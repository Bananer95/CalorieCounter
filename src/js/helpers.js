import { btnCler, btnRes } from './eventLinks';

function showBlock(block) {
  block.classList.add('show');
  btnCler.textContent = 'Закрыть';
}

function showText(block, str) {
  block.textContent = str;
}

function removeClass(block, clas) {
  block.classList.remove(clas);
}

function addClass(block, clas) {
  block.classList.add(clas);
}

function enableButton() {
  btnRes.removeAttribute('disabled');
}

function changeValue(block, str) {
  block.setAttribute('value', str);
}
export {
  showBlock,
  showText,
  removeClass,
  enableButton,
  addClass,
  changeValue,
};
