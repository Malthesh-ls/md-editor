import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownEditor from './view/MarkdownEditor';
import './custom.scss'

const App = () =>(
    <MarkdownEditor />
)


ReactDOM.render(
    <App/>,
    document.getElementById('md')
)