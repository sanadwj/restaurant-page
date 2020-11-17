import { load } from './load';
import './style.css';

const loads = load();

const content = document.getElementById('content');
content.appendChild(loads);
