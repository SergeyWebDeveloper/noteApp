import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Components/Form.jsx';
import Note from './Components/Note.jsx';

import './app.sass';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state={
            notes: [
                {
                    id: 1,
                    text: 'lorem 1'
                },
                {
                    id: 2,
                    text: 'lorem 2'
                },
                {
                    id: 3,
                    text: 'lorem 3'
                }
            ]
        }
    }

    render(){
        return(
            <div className="notes__wrapper">
                <div className="container">
                    <Form />
                    <div className="notes__container">
                        {this.state.notes.map((note)=>{
                            return <Note key={note.id} id={note.id} title={note.text} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    < App />,
    document.getElementById('root')
);
