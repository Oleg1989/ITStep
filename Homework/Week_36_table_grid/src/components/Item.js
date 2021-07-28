export function Item(props) {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.date.toString()}</td>
            </tr>
        </>
    )
}