import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Preload from './components/Preload';
import App from './components/App'; // Seu componente principal
import reportWebVitals from './components/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = () => {
    return (
        <>
            {/* {loading ? <Preload /> : <App />} Mostra o Preload enquanto carrega */}
            <App />
        </>
    );
};

root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);

reportWebVitals();
