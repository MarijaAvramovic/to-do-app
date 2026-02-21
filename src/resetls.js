import { list } from './index.js';
const clrBtn = document.querySelector('#clr');

export const reset = clrBtn.addEventListener('click', function () {
  localStorage.removeItem('arrayList');
  list.innerHTML = '';
});
