
export function Item(prop) {
    return (
        <li key={prop.key} className="collection-item dismissable"><div>{prop.city}<a href="#!" className="secondary-content">{prop.temperature}</a></div></li>
    );
}