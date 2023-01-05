import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

function loader(element) {
  element.textCotent = '';

  loadInterval = setInterval(() => {
    element.textCotent += '.';
    if (element.textCotent === '....') {
      element.textCotent = '';
    }
  }, 300)
}