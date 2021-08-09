import React, { useState, ChangeEvent } from "react";
// import EventEmitter from "events";

interface EditorState {
    article: string;
};
interface State {
    currentState: EditorState;
    prevState: EditorState[];
    nextState: EditorState[];
};

export default function Editor() {
    const [state, setState] = useState<State>({ currentState: { article: "" }, prevState: [], nextState: [], }); console.log(state);
    const onArticleEdit = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setState((prevState) => ({
            ...state, currentState: { article: event.target.value }, prevState: [...state.prevState, { article: state.currentState.article }],
            nextState: [],
        }));
    };
    const onUndo = () => {
        const nextStateItem = { ...state.currentState };
        const newCurrentState = state.prevState.pop();
        if (newCurrentState)
            setState({
                ...state,
                currentState: newCurrentState,
                nextState: [nextStateItem, ...state.nextState],
            });
    };
    const onRedo = () => {
        const newCurrentState = state.nextState.shift();
        if (newCurrentState)
            setState({
                ...state,
                currentState: newCurrentState,
                nextState: [...state.nextState],
                prevState: [...state.prevState, state.currentState],
            });
    };
    return (
        <>
            <br />
            <textarea rows={12} cols={80} value={state.currentState.article} onChange={onArticleEdit}></textarea><br />
            <button onClick={onUndo}>Undo</button>
            <button onClick={onRedo}>Redo</button>
        </>);
};