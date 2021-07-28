import cuid from 'cuid';

const dataTest = [
    { id: cuid(), title: 'Трачук Сергій', date: new Date(1999, 10, 20) },
    { id: cuid(), title: 'Сідоров Петро', date: new Date(1986, 2, 1) },
    { id: cuid(), title: 'Петрнко Дмитро', date: new Date(2000, 8, 21) },
    { id: cuid(), title: 'Луцько Олександр', date: new Date(2005, 6, 24) },
    { id: cuid(), title: 'Іванов Іван', date: new Date(2010, 9, 1) },
    { id: cuid(), title: 'Дудко Павло', date: new Date(1986, 3, 17) }
];
export default dataTest;