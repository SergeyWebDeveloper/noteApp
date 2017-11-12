import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {

    constructor(props){
        super(props);
        this.state={
            text: '',
            color: ['red','blue','green'],
            defaultColor: 'yellow'
        };
        this.textAreaChange=this.textAreaChange.bind(this);
        this.addNote=this.addNote.bind(this);
        this.colorNote=this.colorNote.bind(this);
    }

    textAreaChange(e){
        let text=e.target.value;
        this.setState({text});
    }

    addNote(e){
        e.preventDefault();
        if(this.state.text.trim()){
            let noteObj={
                id: Date.parse(new Date()),
                text: this.state.text,
                color: this.state.defaultColor
            };
            this.props.noteText(noteObj);
            this.setState({text: '', defaultColor: 'yellow'});
        }
    }

    colorNote(color){
        this.setState({defaultColor: color});
    }

    render(){
        return(
            <form className='note__form'>
                <textarea onChange={this.textAreaChange} value={this.state.text} className='note__textarea' placeholder='Введи заметку'></textarea>
                <div className="form__collors">
                    {
                        this.state.color.map((color)=>{
                            return <div onClick={this.colorNote.bind(this,color)} key={color} className="color__item" style={{backgroundColor: color}}></div>
                        })
                    }
                </div>
                <button onClick={this.addNote} className="btn__add material-icons">note_add</button>
            </form>
        );
    }
}

Form.propTypes={
    noteText: PropTypes.func.isRequired
};

export default Form;