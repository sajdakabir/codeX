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


function typeText(element,text){
  let index=0;
  let interval=setInterval(()=>{
    if(index<text.length){
      element.innerHTML+=text.chartAt(index);
      index++;
    }else{
      clearInterval(interval);
    }
  },20)
}


function generateUniqueId(){
  const timestamp=Data.now();
  const randomNumber=Math.random();
  const hexadecimalString=randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}