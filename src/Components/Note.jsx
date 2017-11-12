import React from 'react';
import PropTypes from 'prop-types';

class Note extends React.Component {

    render(){
        return(
            <div className="note_item" style={{backgroundColor: this.props.color}}>
                <p>{this.props.title}</p>
                <button onClick={()=>this.props.deleteNoteId(this.props.id)} className="btn__close material-icons close">close</button>
            </div>
        );
    }
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  deleteNoteId: PropTypes.func.isRequired
};

export default Note;