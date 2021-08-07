import band from '../images/band.jpg';

export default function Band() {
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={band} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Metallica<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><b>Metallica</b><i className="material-icons right">close</i></span>
                <p><b>Склад:</b> Джеймс Гетфілд, Ларс Ульріх, Кірк Геммет, Роберт Трухільйо</p>
                <p><b>Колишні учасники:</b> Дейв Мастейн, Рон Макговні, Кліфф Бертон, Джейсон Ньюстед, Ллойд Грант</p>
                <p><b>Альбоми:</b> Kill 'Em All, Ride the Lightning, Master of Puppets, ...And Justice for All, Metallica, 	Load, ReLoad, St. Anger, Death Magnetic, Hardwired...To Self-Destruct</p>
            </div>
        </div>
    );
}