import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
import { Provider } from 'react-redux';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>    
    </Provider>
    
);
