import React from 'react';
import App from './App';
import store from "./store";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});