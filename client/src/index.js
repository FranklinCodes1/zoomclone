import React from 'react';           //always need this file index.js... 
import  ReactDOM  from 'react-dom';

import App from './App';
import { ContextProvider } from './SocketContext';
import './styles.css';


ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
, document.getElementById('root')  //our app connects to this root div
);  