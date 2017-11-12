import React from 'react';
import PropTypes from 'prop-types';

class Note extends React.Component {

    render(){
        return(
            <div className="note_item">
                <p>{this.props.title}</p>
                <button className="btn__close material-icons close">close</button>
            </div>
        );
    }
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Note;