import React from 'react';
import PropTypes from 'prop-types';

class Note extends React.Component {

    constructor(props){
        super(props);
        this.state={
            edit: false
        };
        this.editNote=this.editNote.bind(this);
        this.editTitle=this.editTitle.bind(this);
    }

    editNote(){
        this.setState({edit: true});
    }

    editTitle(e){
        e.preventDefault();
        let title=this.refs.titleInput.value;
        this.props.callbackEditNote(title,this.props.id);
        this.setState({edit: false});
    }

    render(){
        return(

            this.state.edit ?

            <div className="note__edit">
                <input ref='titleInput' type="text" defaultValue={this.props.title} />
                <button className="material-icons save" onClick={this.editTitle}>save</button>
            </div>

            :

            <div className="note_item" style={{backgroundColor: this.props.color}}>
                <p>{this.props.title}</p>
                <button onClick={this.editNote} className="material-icons edit">edit</button>
                <button onClick={()=>this.props.deleteNoteId(this.props.id)} className="btn__close material-icons close">close</button>
            </div>
        );
    }
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  deleteNoteId: PropTypes.func.isRequired,
  callbackEditNote: PropTypes.func.isRequired
};

export default Note;