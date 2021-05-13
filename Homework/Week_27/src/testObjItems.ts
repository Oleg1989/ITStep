import { DataBookItem } from "./BookItem"
import { DataGameItem } from "./GameItem"
import { DataMovieItem } from "./MovieItem"
import { DataMusicItem } from "./MusicItem"
import { DataSportEventItem } from "./SportEvent"
import { DataItemsArray } from "./ItemsMas"

let i1 = new DataBookItem("1984", "Роман розповідає історію Вінстона Сміта і його деградації під впливом тоталітарної держави",
    ["Антиутопія", "політична фантастика", "соціальна фантастика"],
    ["Джордж Орвелл"]);
let i2 = new DataBookItem("Премудрий гіда́льго Дон Кіхо́т з Лама́нчі", "Головний герой, Алонсо Кіхано ─ незаможний дворянин, що прочитав багато лицарських романів.",
    ["Роман"],
    ["Мігель де Сервантес"]);

let i3 = new DataGameItem("Gothic I", "Темне епічне фентезі про страждання Безіменного героя в середньовічній версії Алькатрасу", ["RPG"], 1.5);
let i4 = new DataGameItem("Gothic II", "Безіменний герой тепер вільний, але темне минуле тягне його на дно", ["RPG"], 3.5);

let i5 = new DataMovieItem("Пірати Карибського моря", "Атракціон в Діснейленді", ["Пригоди"], ["Джоні Депп", "Кіра Найтлі", "Орландо Блум"]);
let i6 = new DataMovieItem("Пірати Карибського моря2", "Атракціон в Діснейленді а тепер і фільм", ["Пригоди"], ["Джоні Депп", "Кіра Найтлі", "Орландо Блум"]);

let i7 = new DataMusicItem("Enter Sandman", "Чистий драйв", ["Хеві-метал"], ["Metallica"], new Date("5:30"));
let i8 = new DataMusicItem("My Apocalipse", "Чистий драйв", ["Треш-метал"], ["Metallica"], new Date("5:01"));

let i9 = new DataMusicItem("My Apocalipse", "Чистий драйв", ["Треш-метал"], ["Metallica"], new Date("5:01"));

export const arrItems = [i1, i2, i3, i4, i5, i6, i7, i8, i9];