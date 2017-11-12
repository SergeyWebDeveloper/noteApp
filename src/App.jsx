import React from 'react';
import ReactDOM from 'react-dom';

import './app.sass';

class App extends React.Component {
    render(){
        return(
            <div className="notes__wrapper">
                <div className="container">
                    <form className='note__form'>
                        <textarea className='note__textarea' placeholder='Введи заметку'></textarea>
                        <button className="btn__add material-icons">note_add</button>
                    </form>
                    <div className="notes__container">
                        <div className="note_item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, soluta.</p>
                            <button className="btn__close material-icons close">close</button>
                        </div>
                        <div className="note_item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, soluta.</p>
                            <button className="btn__close material-icons close">close</button>
                        </div>
                        <div className="note_item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, soluta.</p>
                            <button className="btn__close material-icons close">close</button>
                        </div>
                        <div className="note_item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, soluta.</p>
                            <button className="btn__close material-icons close">close</button>
                        </div>
                        <div className="note_item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, soluta.</p>
                            <button className="btn__close material-icons close">close</button>
                        </div>
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
