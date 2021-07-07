export function Counter(props) {
    if (props.login) {
        return (
            <>
                <h1>{props.value}</h1>
                <button onClick={props.onIncrease}>+</button>&nbsp;
                <button onClick={props.onDecrease}>-</button>
                <div>
                    <input type="email" placeholder="Email" id="email" onChange={props.onChackEmail} />
                </div>
                <div>
                    <input type="password" placeholder="Password" id="password" onChange={props.onChackPassword} />
                </div>
                <div>
                    <input type="button" value="Login" onClick={props.onLogin} />
                </div>
            </>
        )
    } else {
        return (
            <div>
                <input type="button" value="Sing out" />
            </div>
        )
    }
}