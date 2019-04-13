//Import our dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//create basic functional react component
const App = () => {
    return <h1>The Tasker: A Task List Example</h1>
}


//Render the react component into the DOM
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
