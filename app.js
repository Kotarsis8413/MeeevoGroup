const appM = document.getElementById("info");
const root = ReactDOM.createRoot(appM);


const pages = {
    mainpage: (
        <div>
            <h3 className="center">Главная</h3>
            <span className="m10">MeeevoGroup - небольшая команда разработчиков-любителей, которой нечем заняться. 
            Именно по этому мы можем предложить порой никому не нужные проекты, но которые могут быть интересными.</span>
            <span className="m10"><a href="https://github.com/Kotarsis8413/MeeevoGroup">Код сайта доступен здесь</a></span>
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
            <div className="m10">
                <div className="pBlock">
                    <h4 className="center">MeeevoShop</h4>
                    <span>pet-проект, интернет магазин</span>
                    <a href="">GitHub репозиторий</a>
                    <a href="">Сайт</a>
                </div>
                <div className="pBlock">
                    <h4 className="center">test2</h4>
                    <span>тест</span>
                </div>
            </div>
            
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