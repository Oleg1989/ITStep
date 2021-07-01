export const Welcom = (props) => {
    if (props.nightMode) {
        return <h1>Welcome, {props.name}!</h1>
    } else {
        return <h1>Good night, {props.name}!</h1>
    }
}