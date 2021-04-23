import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MyContext } from "./MyContext"

ReactDOM.render(
    <MyContext>
        <App />
    </MyContext>,
    document.getElementById('root')
);