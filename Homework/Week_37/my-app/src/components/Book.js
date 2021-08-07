import book from '../images/book.jpg';

export default function Book() {
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={book} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Код да Вінчі<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><b>Код да Вінчі</b><i className="material-icons right">close</i></span>
                <p><b>Автор:</b> Д. Браун</p>
                <p><b>Жанр книги:</b> детектив, триллер</p>
                <p><b>Кількість сторінок:</b> 480</p>
                <p>Впервые когда прочитала произведение Дэна Брауна "Код Да Винчи" долгое время была под сильным впечатлением и если сравнивать с одноимённым фильмом с Томом Хэнксом в главной роли, то фильм даже рядом не стоит с первоисточником. Даже концовка в фильме получилась скомканной, не совсем понятной. В книге же даётся более ясное объяснение зачем куратор Лувра Жан Соньер искал профессора по символике Роберта Лэнгдона. Книга является по мне больше детективом с приключенческим уклоном. Сюжет динамичный, события развиваются быстро, на протяжении всего произведения остаётся желание узнать какую загадку скрывал Жан Соньер и кто стоит за всеми преступлениями. Книга достаточно объёмная, в моем варианте около 600 страниц, но так как оторваться невозможно, то я прочла её за день.</p>
            </div>
        </div>
    );
}