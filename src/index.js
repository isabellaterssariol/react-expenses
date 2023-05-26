import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; // se for do arquivo .js podemos omitir esse .js

const root = ReactDOM.createRoot(document.getElementById('root')); // cria uma constante que coloca a root (raíz), ou seja, o conteúdo que irá aparecer na página dentro da div 'root' que está no HTML //
root.render(<App />); // diz o que deve ter dentro dessa div root, ou seja, qual conteúdo, nesse caso estamos importando do arquivo app.js

