import _ from 'lodash';
import myName from './myName';

function component() {
  const element = document.createElement('div');

  // lodash now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = myName('Brent');

  return element;
}

document.body.appendChild(component());