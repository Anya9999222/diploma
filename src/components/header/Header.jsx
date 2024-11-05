import './Header.css'

export const Header = () => {
    return (
        
            <div className="header__container">
                <nav className="header__menu">
                    <a className="header__logo"  href="#0">
                        Logo
                    </a>
                    <ul className="header__menu-list">
                        <li className="list-item">
                            <a className="menu-link" href="#0">О нас</a>
                        </li>
                        <li className="list-item">
                            <a className="menu-link" href="#0">Как это работает</a>
                        </li>
                        <li className="list-item">
                            <a className="menu-link" href="#0">Отзывы</a>
                        </li>
                        <li className="list-item">
                            <a className="menu-link" href="#0">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div className="header__title">Вся жизнь - <br />путешествие!</div>
                <div className="header__form">
                    <form action=""></form>
                </div>
            </div>
        
    )
}

export default Header