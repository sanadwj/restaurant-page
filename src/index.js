import main from './main';
import menu from './menu';
import contact from './contact';
import { tabs, active } from './tabs';
import './style.css';

const content = document.getElementById('content');
content.appendChild(tabs());

const activeTab = (index) => {
  let tabsContent;
  switch (index) {
    default:
      tabsContent = [main];
      break;
    case 1:
      tabsContent = [menu];
      break;
    case 2:
      tabsContent = [contact];
  }
  return tabsContent;
};

const reset = () => {
  const content = document.getElementById('content').childNodes;
  [...content].forEach((item, index) => {
    if (index !== 0) {
      item.remove();
    }
  });
};

const load = (index = 0) => {
  reset();
  const tabsContent = activeTab(index);
  const content = document.getElementById('content');
  tabsContent.forEach((tab) => {
    content.appendChild(tab());
  });
  active(index);
};

load();

const tabed = document.getElementsByClassName('tab');

[...tabed].forEach((tab, index) => {
  tab.addEventListener('click', load.bind(this, index));
});