import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TodoApp from "./components/TodoApp";
import {createRoot} from "react-dom/client";
import "./styles/TodoApp.css";

const root = createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <TodoApp />
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
