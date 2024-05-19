const appM = document.getElementById("info");
const root = ReactDOM.createRoot(appM);


const pages = {
    mainpage: (
        <div>
            <h3 className="center">Главная</h3>
            <span className="m10">MeeevoGroup - небольшая команда разработчиков-любителей, которой нечем заняться. 
            Именно по этому мы можем предложить порой никому не нужные проекты, но которые могут быть интересными.</span>
            <span className="m10">Код сайта доступен <a href="https://github.com/Kotarsis8413/MeeevoGroup">здесь</a></span>
        </div>
    ),
    contacts: (
        <div>
            <h3 className="center">Контакты</h3>
            <span className="m10">Не уверены, что кому-то захочется связаться с нами, но если хотите: 
            kotarsis8413@bk.ru - почта
            </span>
        </div>
    ),
    projects: (
        <div>
            <h3 className="center">Проекты</h3>
            <span className="m10">Пока что мы не успели ничего сделать кроме этого сайта, если интересно, то он написан на React js.
            </span>
        </div>
    )
};

root.render(pages.mainpage);

function changePage(page) {
    switch (page) {
        case 'main':
            root.render(pages.mainpage);
            break;
        case 'contacts':
            root.render(pages.contacts);
            break;
        case 'projects':
            root.render(pages.projects);
            break;
        default:
            root.render(<h1>RENDER ERROR</h1>);
            break;
    }
}