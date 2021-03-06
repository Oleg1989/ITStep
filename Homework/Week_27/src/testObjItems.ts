import { Book } from "./classItems/book";
import { Game } from "./classItems/game";
import { Movie } from "./classItems/movie";
import { Music } from "./classItems/music";

let i1 = new Book("Title1", "Роман розповідає історію Вінстона Сміта і його деградації під впливом тоталітарної держави", "Антиутопія, політична фантастика, соціальна фантастика", "Джордж Орвелл");
let i2 = new Book("Премудрий гіда́льго Дон Кіхо́т з Лама́нчі", "Головний герой, Алонсо Кіхано ─ незаможний дворянин, що прочитав багато лицарських романів.", "Роман", "Мігель де Сервантес");
let i3 = new Game("Gothic I", "Темне епічне фентезі про страждання Безіменного героя в середньовічній версії Алькатрасу", "pc", "фентезі");
let i4 = new Game("Gothic II", "Безіменний герой тепер вільний, але темне минуле тягне його на дно", "xbox", "фентезі");
let i5 = new Movie("Пірати Карибського моря", "Атракціон в Діснейленді", "Пригоди", "Режесер", "Джоні Депп, Кіра Найтлі, Орландо Блум");
let i6 = new Movie("Пірати Карибського моря2", "Атракціон в Діснейленді а тепер і фільм", "Режесер", "Пригоди", "Джоні Депп, Кіра Найтлі, Орландо Блум");
let i7 = new Music("Enter Sandman", "Чистий драйв", "Хеві-метал", "Metallica", "Enter Sandman");
let i8 = new Music("My Apocalipse", "Чистий драйв", "Треш-метал", "Metallica", "My Apocalipse");
let i9 = new Music("My Apocalipse2", "Чистий драйв2", "Треш-метал", "Metallica", "My Apocalipse2");

export const arrItems = [i1, i2, i3, i4, i5, i6, i7, i8, i9];