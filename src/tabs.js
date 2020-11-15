const tabs = () => {
  const tabs = document.createElement('div');
  const tab1 = document.createElement('div');
  const button1 = document.createElement('button');
  button1.innerHTML = '<h3>MAIN</h3>';
  tab1.appendChild(button1);

  const tab2 = document.createElement('div');
  const button2 = document.createElement('button');
  button2.innerHTML = '<h3>Menu</h3>';
  tab2.appendChild(button2);

  const tab3 = document.createElement('div');
  const button3 = document.createElement('button');
  button3.innerHTML = '<h3>Contact</h3>';
  tab3.appendChild(button3);

  [tab1, tab2, tab3].forEach((tab) => {
    tabs.appendChild(tab);
  });

  return tabs;
};

export { tabs };