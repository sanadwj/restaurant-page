import { main } from './main';
import { menu } from './menu';
import { contact } from './contact';
import { tabs } from './tabs';

const tab = tabs();
const mainTab = main();
const menuTab = menu();
const contactTab = contact();




const load = () => {
  const load = document.createElement('div');
  load.appendChild(tab);
  load.appendChild(mainTab);
  load.appendChild(menuTab);
  load.appendChild(contactTab);
  return load;
};

export { load };