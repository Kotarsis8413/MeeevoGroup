const appM = document.getElementById("info");
const root = ReactDOM.createRoot(appM);

const mainpage = (
    <div>
    <h3 className="center">Главная</h3>
    <span className="m10">MeeevoGroup - небольшая команда разработчиков-любителей, которой нечем заняться. 
    Именно по этому мы можем предложить порой никому не нужные проекты, но которые могут быть интересными.</span>
    </div>
);

const contacts = (
    <div>
    <h3 className="center">Контакты</h3>
    <span className="m10">Не уверены, что кому-то захочется связаться с нами, но если хотите: 
    kotarsis8413@bk.ru - почта
    </span>
    </div>
)

const projects = (
    <div>
    <h3 className="center">Проекты</h3>
    <span className="m10">Пока что мы не успели ничего сделать кроме этого сайта, если интересно, то он написан на React js
    </span>
    </div>
)

root.render(mainpage);

function setToMain() {
    root.render(mainpage);
}

function setToContacts() {
    root.render(contacts);
}

function setToProjects() {
    root.render(projects);
}