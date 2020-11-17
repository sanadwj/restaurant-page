const menu = () => {
  const menu = document.createElement('div');
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');
  menuDiv.innerHTML = 'Menu';
  menu.appendChild(menuDiv);
  return menu;
};

export { menu };