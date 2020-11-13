
import './style.css';
 
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = 'Hello', 'webpack'
 element.classList.add('hello');

  return element;
}
console.log("Hello Sandoog");

document.body.appendChild(component());
