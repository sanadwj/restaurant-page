const menu = () => {
  const menu = document.createElement('div');
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('id', 'menu');
  menuDiv.innerHTML = 'Menu';
  menu.appendChild(menuDiv);
  return menu;
};

export default menu;