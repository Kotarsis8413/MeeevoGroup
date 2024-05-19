/*import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
}*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const appM = document.getElementById("info");
const root = ReactDOM.createRoot(appM);

const pages = {
  main: (
    <div>
      <h3 className="center">Главная</h3>
      <span className="m10">MeeevoGroup - небольшая команда разработчиков-любителей, которой нечем заняться. 
      Именно по этому мы можем предложить порой никому не нужные проекты, но которые могут быть интересными.</span>
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
      <span className="m10">Пока что мы не успели ничего сделать кроме этого сайта, если интересно, то он написан на React js
      </span>
    </div>
  )
};

const [currentPage, setCurrentPage] = useState('main');

const handlePageChange = (page) => {
  setCurrentPage(page);
};

root.render(
  <BrowserRouter>
    <nav>
      <Link to="/" onClick={() => handlePageChange('main')}>Главная</Link>
      <Link to="/contacts" onClick={() => handlePageChange('contacts')}>Контакты</Link>
      <Link to="/projects" onClick={() => handlePageChange('projects')}>Проекты</Link>
    </nav>
    <Route path="/" exact>
      {currentPage === 'main' && pages.main}
    </Route>
    <Route path="/contacts">
      {currentPage === 'contacts' && pages.contacts}
    </Route>
    <Route path="/projects">
      {currentPage === 'projects' && pages.projects}
    </Route>
  </BrowserRouter>
);