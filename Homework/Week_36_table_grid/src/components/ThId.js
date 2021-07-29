export function ThId(props) {
    return (
        <th>
            <button onClick={props.onSort} id="id" className="waves-effect waves-light btn" >Id&nbsp;&#8593;&nbsp;&#8595;</button>
        </th>
    );
}