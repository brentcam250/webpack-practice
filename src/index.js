import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './test.png';

function component() {
  const element = document.createElement('div');

  // lodash now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = myName('Brent');
  element.classList.add('hello');

  const icon = new Image();
  icon.src = Icon;

  element.appendChild(icon);

  return element;
}

document.body.appendChild(component());