const tabs = () => {
  const tabs = document.createElement('div');
  tabs.setAttribute('id', 'tabs');
  const tab1 = document.createElement('div');
  tab1.setAttribute('id', 'tabDiv');
  const link1 = document.createElement('a');
  link1.className = 'tab';
  link1.setAttribute('id', 'tab');
  link1.innerHTML = '<h3>OUR RESTURANT</h3>';
  tab1.appendChild(link1);

  const tab2 = document.createElement('div');
  tab2.setAttribute('id', 'tabDiv');
  const link2 = document.createElement('a');
  link2.setAttribute('id', 'tab');
  link2.className = 'tab';
  link2.innerHTML = '<h3>Menu</h3>';
  tab2.appendChild(link2);

  const tab3 = document.createElement('div');
  tab3.setAttribute('id', 'tabDiv');
  const link3 = document.createElement('a');
  link3.setAttribute('id', 'tab');
  link3.className = 'tab';
  link3.innerHTML = '<h3>Contact</h3>';
  tab3.appendChild(link3);

  [tab1, tab2, tab3].forEach((tab) => {
    tabs.appendChild(tab);
  });

  return tabs;
};

const active = (index) => {
  [0, 1, 2].forEach((tabIndex) => {
    let tab;
    if (tabIndex === index) {
      tab = document.getElementsByClassName('tab')[tabIndex];
      tab.className = 'tab';
    } else {
      tab = document.getElementsByClassName('tab')[tabIndex];
      tab.className = 'tab';
    }
  });
};


export { tabs, active };