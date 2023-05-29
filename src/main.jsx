import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import {homepage} from "./store/services/routes.js";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/*<BrowserRouter>*/}
		<BrowserRouter basename={homepage}>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
