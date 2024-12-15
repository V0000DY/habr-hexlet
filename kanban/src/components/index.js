'use client'
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DocumentBoard from './DocumentBoard';
import DocumentForm from './DocumentForm';

const App = () => {
    return (
        <Provider store={store}>
          <h1>Канбан-доска для управления документами</h1>
          <DocumentForm />
          <DocumentBoard />
        </Provider>
    );
};

export default App;
