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
                    text: 'lorem 1',
                    color: 'yellow'
                },
                {
                    id: 2,
                    text: 'lorem 2',
                    color: 'yellow'
                },
                {
                    id: 3,
                    text: 'lorem 3',
                    color: 'yellow'
                }
            ]
        };
        this.handleAddText=this.handleAddText.bind(this);
        this.handleDeleteNote=this.handleDeleteNote.bind(this);
    }

    handleAddText(obj){
        let notes=this.state.notes;
        notes.push(obj);
        this.setState({notes});
    }

    handleDeleteNote(id){
        let notes=this.state.notes.filter((note)=>{
           return note.id!==id;
        });
        this.setState({notes});
    }

    render(){
        return(
            <div className="notes__wrapper">
                <div className="container">
                    <Form noteText={this.handleAddText} />
                    <div className="notes__container">
                        {this.state.notes.map((note)=>{
                            return <Note deleteNoteId={this.handleDeleteNote} key={note.id} id={note.id} title={note.text} color={note.color} />
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
