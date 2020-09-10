import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main';

import css from './styles/style.styl';

const mountPoint = document.getElementById('root');
render(<Main />, mountPoint);
