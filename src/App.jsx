import React from 'react';
import ReactDOM from 'react-dom';

import './app.sass';

class App extends React.Component {
    render(){
        return(
          <p>App</p>
        );
    }
}

ReactDOM.render(
    < App />,
    document.getElementById('root')
);
