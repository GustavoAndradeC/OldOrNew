import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header';
import FCard from './Components/Cards/FristCard/FCard';
import Frases from './Components/Frase/Frases';
import Social from './Components/Cards/SecondCard/SCard';
import Shop from './Components/Cards/Shop/Shopping';
import Purchase from './Components/Cards/Shop/Purchase';
import LCard from './Components/Cards/LastCard/LCard';
import FFree from './Components/Cards/LastCard/FFree';
import Faq from './Components/FAQ/Faq';

import { Animation, fadeIn } from './Animation';

import { GlobalConfig, Space } from './Models';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <GlobalConfig />
    <Animation >
    <Header />
    <FCard />
    <Frases />
    <Social />
    <Shop />
    <Purchase />
    <LCard />
    <FFree />
    <Faq />
    <Space />
    </Animation >

  </React.StrictMode>
);

