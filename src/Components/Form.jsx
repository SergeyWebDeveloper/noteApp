import React from 'react';

class Form extends React.Component {

    render(){
        return(
            <form className='note__form'>
                <textarea className='note__textarea' placeholder='Введи заметку'></textarea>
                <button className="btn__add material-icons">note_add</button>
            </form>
        );
    }
}

export default Form;