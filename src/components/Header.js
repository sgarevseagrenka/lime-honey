import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <nav className="nav">
                    <a href="#" className="nav__item">Главная</a>
                    <a href="#" className="nav__item">Виды меда</a>
                    <a href="#" className="nav__item">Обратный звонок</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;