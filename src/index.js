import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import { ResetCss } from "./style/ResetCss";
import { GlobalStyle } from "./style/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ResetCss />
        <GlobalStyle />
        <App />
    </React.StrictMode>
);