import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//[RS] Add nelow exports to configure Amplify in this project 
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)

ReactDOM.render(<App />,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
