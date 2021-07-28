export function ThDate(props) {
    return (
        <th>
            <button onClick={props.onSort} id="date" className="waves-effect waves-light btn">Date</button>
        </th>
    );
}