import { useSelector } from 'react-redux';
import {
    selectChatDisabled
} from './chatSlice';

export function SendMessage() {
    const disabled = useSelector(selectChatDisabled);

    return (
        <>
            <div className="col s11">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">textsms</i>
                                <textarea id="textarea1" className="materialize-textarea" disabled={disabled}></textarea>
                                <label htmlFor="textarea1">Massage</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col s1">
                <div className="row">
                    <button className=" btn waves-effect waves-light btn-large" type="submit" name="action"
                        id="message" disabled={disabled}>Send</button>
                </div>
            </div>
        </>
    );
}