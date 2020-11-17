const main = () => {
  const main = document.createElement('div');
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');
  mainDiv.innerHTML = 'Welcome';
  main.appendChild(mainDiv);
  return main;
};

export { main };
