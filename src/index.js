import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from "./style/GlobalStyles";
import { ResetCss } from "./style/ResetCss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ResetCss />
        <GlobalStyle />
        <App />
    </React.StrictMode>
);