import { Item } from './Item';

export function Tbody(props) {
    const ListItem = props.data.map((i) => <Item id={i.id} title={i.title} date={i.date} key={i.id} />);
    return (
        <tbody>
            {ListItem}
        </tbody>
    );
}