import React, { useState, ChangeEvent } from "react";

interface EditorState {
    article: string;
};
interface State {
    currentState: EditorState;
    stateData: EditorState[];
};

export default function Editor() {
    const [state, setState] = useState<State>({ currentState: { article: '' }, stateData: [] });
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
        if (newCurrentState) {
            if (!!stateItem.article) {
                setState({
                    ...state,
                    currentState: newCurrentState,
                    stateData: [stateItem, ...state.stateData]
                });
            } else {
                setState({
                    ...state,
                    currentState: stateItem,
                    stateData: [...state.stateData, newCurrentState]
                });
            }
        }
    };
    const onRedo = () => {
        const newCurrentState = state.stateData.shift();
        if (newCurrentState) {
            if (!!newCurrentState.article) {
                setState({
                    ...state,
                    currentState: newCurrentState,
                    stateData: [...state.stateData, state.currentState],
                });
            } else {
                setState({
                    ...state,
                    stateData: [newCurrentState, ...state.stateData],
                });
            }
        }
    };
    return (
        <>
            <h1>Editor</h1>
            <textarea rows={24} cols={150} value={state.currentState.article} onChange={onArticleEdit}></textarea><br />
            <button onClick={onUndo}>Undo</button>
            <button onClick={onRedo}>Redo</button>
        </>);
};