import { Item } from './Item';
import { isEmpty } from 'lodash';

export function Tbody(props) {
    if (isEmpty(props.data)) {
        return (
            <tbody></tbody>
        );
    } else {
        const ListItem = props.data.map((i) => <Item id={i.id} title={i.title} date={i.date} key={i.id} />);
        return (
            <tbody>
                {ListItem}
            </tbody>
        );
    }
}