import { useState } from 'react';

export function Container() {
    const [isLogin, setLogin] = useState(false);

    if (isLogin) {
        return (
            <div className="container">
                <button onClick={() => setLogin(false)}>Logout</button>
            </div>
        );
    } else {
        return (
            <div className="container">
                <button onClick={() => setLogin(true)}>Login</button>
            </div>
        );
    }

}