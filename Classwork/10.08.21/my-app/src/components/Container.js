import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { RegisterForm } from './RegisterForm';
import { Chat } from './Chat';
import { io } from "socket.io-client";

export default function Container() {
    const socket = io("ws://bt-21-playground-vppfc.ondigitalocean.app/");

    return (
        <>
            <RegisterForm />
            <Chat />
        </>
    );
}