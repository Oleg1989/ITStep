import { TableGrid } from './components/TableGrid';
import 'materialize-css/dist/css/materialize.min.css';
import dataTest from './dataTest'

export function Container() {
    return <div className="container">
        <TableGrid dataTest={dataTest} />
    </div>
}