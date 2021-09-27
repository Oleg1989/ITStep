import React, { useState, ChangeEvent } from "react";

interface EditorState {
    article: string;
};
interface State {
    currentState: EditorState;
    stateData: EditorState[];
};

export default function Editor() {
    const [state, setState] = useState<State>({ currentState: { article: "" }, stateData: [] });
    console.log(state);
    const onArticleEdit = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setState((stateData) => ({
            ...state,
            currentState: { article: event.target.value },
            stateData: [...state.stateData, { article: state.currentState.article }],
        }));
    };
    const onUndo = () => {
        const stateItem = { ...state.currentState };
        const newCurrentState = state.stateData.pop();
        if (newCurrentState)
            setState({
                ...state,
                currentState: newCurrentState,
                stateData: [stateItem, ...state.stateData],
            });
    };
    const onRedo = () => {
        const newCurrentState = state.stateData.shift();
        if (newCurrentState)
            setState({
                ...state,
                currentState: newCurrentState,
                stateData: [...state.stateData, state.currentState],
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