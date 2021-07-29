export function ThDate(props) {
    return (
        <th>
            <button onClick={props.onSort} id="date" className="waves-effect waves-light btn">Date&nbsp;&#8593;&nbsp;&#8595;</button>
        </th>
    );
}