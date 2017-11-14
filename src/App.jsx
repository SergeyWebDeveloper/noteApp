import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Components/Form.jsx';
import Note from './Components/Note.jsx';

import './app.sass';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state={
            notes: []
        };
        this.handleAddText=this.handleAddText.bind(this);
        this.handleDeleteNote=this.handleDeleteNote.bind(this);
        this.handleEditNote=this.handleEditNote.bind(this);
    }

    handleAddText(obj){
        let notes=this.state.notes.slice();
        notes.push(obj);
        this.setState({notes});
        // console.log(notes);
    }

    handleDeleteNote(id){
        let notes=this.state.notes.filter((note)=>{
           return note.id!==id;
        });
        this.setState({notes});
    }

    handleEditNote(title,id){
        let notes=this.state.notes.map((note)=>{
           if(id===note.id){
               note.text=title;
           }
           return note;
        });
        this.setState({notes});
    }

    componentDidMount(){
        this.msnr=new Masonry(this.refs.masonryElem,{
            itemSelector: '.note_item',
            columnWidth: 350,
            gutter: 10
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log(this.state.notes.length);
        console.log(prevState.notes.length);
        if(this.state.notes.length!==prevState.notes.length){
            this.msnr.reloadItems();
            this.msnr.layout();
        }
    }

    render(){
        return(
            <div className="notes__wrapper">
                <div className="container">
                    <Form noteText={this.handleAddText} />
                    <div className="notes__container" ref="masonryElem">
                        {this.state.notes.map((note)=>{
                            return <Note callbackEditNote={this.handleEditNote} deleteNoteId={this.handleDeleteNote} key={note.id} id={note.id} title={note.text} color={note.color} />
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
