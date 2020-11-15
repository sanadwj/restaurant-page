import { tabs } from './tabs';

const tab = tabs();

const load = () => {
  const load = document.createElement('div');
  load.appendChild(tab);
  return load;
};

export { load };