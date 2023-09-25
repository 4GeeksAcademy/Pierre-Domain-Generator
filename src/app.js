/* eslint-disable */
import 'bootstrap';
import './style.css';

import './assets/img/rigo-baby.jpg';
import './assets/img/4geeks.ico';

let pronoun = ['The', 'Our'];

let adjectives = [
  'Beautiful',
  'Mysterious',
  'Enchanting',
  'Courageous',
  'Vibrant',
  'Serene',
  'Playful',
  'Radiant',
  'Tranquil',
  'Majestic',
];

let nouns = [
  'Ocean',
  'Mountain',
  'Sunset',
  'Adventure',
  'Friendship',
  'Dream',
  'Journey',
  'Castle',
  'Forest',
  'Star',
];

const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const domain = document.querySelector('#domain');

window.onload = function() {
  //write your code here
  domain.innerHTML = `${randomElement(pronoun)}${randomElement(
    adjectives
  )}${randomElement(nouns)}.com`;
  console.log(domain.innerHTML);
  console.log('Hello Rigo from the console!');
};
