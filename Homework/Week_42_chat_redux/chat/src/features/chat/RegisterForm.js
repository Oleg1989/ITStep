import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authenticatedChat } from './chatSlice';

export function RegisterForm() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const singIn = () => {
        if (inputValue !== '') {
            dispatch(authenticatedChat(inputValue));
        }
    }
    return (
        <div className="row">
            <div className="card">
                <div className="col s12">
                    <button data-target="modal1" className="btn modal-trigger">Register</button>
                    <div id="modal1" className="modal">
                        <div className="modal-content">
                            <h4 className="center-align">Enter your nickname</h4>
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input
                                                id="nikname"
                                                type="text"
                                                className="validate"
                                                value={inputValue}
                                                onChange={(event) => { setInputValue(event.target.value) }} />
                                            <label htmlFor="nikname">Nikname</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                className="modal-close btn waves-effect waves-light"
                                type="button"
                                name="action"
                                id="add-nick"
                                onClick={singIn}>
                                Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}