export function ThId(props) {
    return (
        <th>
            <button onClick={props.onSort} id="id" className="waves-effect waves-light btn" >ID</button>
        </th>
    );
}