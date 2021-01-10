import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//[RS] Add nelow exports to configure Amplify in this project 
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)

ReactDOM.render(<App />,document.getElementById('root'));

