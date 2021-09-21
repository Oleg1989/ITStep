export function ItemMessage(props) {
    return (
        <li className="collection-item" >{props.user} --- {props.message}</li>
    )
}