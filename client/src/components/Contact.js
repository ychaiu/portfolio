import React, { Component } from 'react';
import SingleInput from './presentational/SingleInput';
import TextArea from './presentational/TextArea';
import Button from './presentational/Button';

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    this.handleInput = this.handleInput.bind(this);
    }

    handleInput(evt) {
        let value = evt.target.value;
        let name = evt.target.name;
        this.setState(prevState => ({
            ...prevState, [name]: value
        }), );
    }
    
    render() {
        return (
            <div className='contact-form'>
                <SingleInput 
                    name={'name'}
                    type={'text'}
                    value={this.state.name}
                    handleChange={this.handleInput}
                    placeholder={'Your Name'}
                    className={'form-name'}
                />
                <SingleInput
                    name={'email'}
                    type={'text'}
                    value={this.state.email}
                    handleChange={this.handleInput}
                    placeholder={'Your Email'}
                    className={'form-email'}
                />
                <TextArea 
                    name={'message'}
                    rows={5}
                    cols={20}
                    value={this.state.message}
                    handleChange={this.handleInput}
                    placeholder={'Message'}
                    className={'form-message'}
                />
                <Button />
            </div>
        )
    }
}

export default Contact;