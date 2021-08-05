import React, { useState, useEffect, ChangeEvent } from 'react';

interface StateShape {
    article: string;
}
interface State {
    currentState: StateShape,
    prevState: StateShape[],
    nextState: StateShape[]

}

function TextArea() {
    const [state, setState] = useState<State>({
        currentState: { article: '' },
        prevState: [],
        nextState: []
    });
    const onEdit = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setState((prevState) => ({
            ...state,
            currentState: { article: event.target.value },
            prevState: [...state.prevState, { article: state.currentState.article }],
            nextState: []
        }));
    }
    const onUndo = () => {

    }
    const onRedo = () => {

    }
    return (
        <div>
            <br />
            <button type='button' onClick={onUndo}>Undo</button>
            <button type='button' onClick={onRedo}>Redo</button>
            <br />
            <br />
            <textarea rows={10}
                cols={40}
                value={state?.currentState.article}
                onChange={onEdit}
            ></textarea>
        </div>
    );
}

export default TextArea;