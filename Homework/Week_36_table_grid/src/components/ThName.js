export function ThName(props) {
    return (
        <th>
            <button onClick={props.onSort} id="title" className="waves-effect waves-light btn">Name&nbsp;&#8593;&nbsp;&#8595;</button>
        </th>
    );
}