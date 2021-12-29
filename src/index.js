import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './test.png';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement('div');

  // lodash now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = myName('Brent');
  element.classList.add('hello');

  const icon = new Image();
  icon.src = Icon;

  element.appendChild(icon);
  console.log(Data);
  console.log(Notes);


  return element;
}

document.body.appendChild(component());