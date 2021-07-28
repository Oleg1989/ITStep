export function ThName(props) {
    return (
        <th>
            <button onClick={props.onSort} id="title" className="waves-effect waves-light btn">Name</button>
        </th>
    );
}