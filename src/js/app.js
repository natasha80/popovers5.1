/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import Widget from './widget';

const widget = new Widget();

const container = document.querySelector('.container');
const btn = document.querySelector('[toggle="popover"]');
container.insertAdjacentHTML('afterbegin', widget.div);

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const popover = container.querySelector('[widget="popover-top"]');
  popover.classList.toggle('invisible');
  popover.classList.toggle('active');
});