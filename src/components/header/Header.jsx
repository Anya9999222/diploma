import { useLocation } from 'react-router-dom'
import './Header.css'
import FormHeader from '../FormHeader/FormHeader';
import { useEffect, useState } from 'react';

export const Header = () => {
    const location = useLocation();

    const [path, setPath] = useState();

    useEffect(() => {
        const name = location.pathname.slice(1)
        console.log(name)
        setPath(name)
    }, [location])
    console.log(location.pathname)
    return (
        
            <header className={`header ${path}`}>
                <nav className="header__menu">
                    <a className="header__logo"  href="#0">
                        Лого
                    </a>
                    <ul className="header__menu-list">
                        <li className="list-item">
                            <a className="menu-link" href="#about">О нас</a>
                        </li>
                        <li className="list-item">
                            <a className="menu-link" href="#info">Как это работает</a>
                        </li>
                        <li className="list-item">
                            <a className="menu-link" href="#feedback">Отзывы</a>
                        </li>
                        <li className="list-item">
                            <a className="menu-link" href="#contact">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div className='header__main'>
                    {location.pathname === '/' ? <div className='header__title'>
                        <div className="header__title-item">Вся жизнь - </div>
                        <span className='header__title-span'> путешествие!</span>
                    </div> : ''}
                    
                    
                {location.pathname !== '/success' ? 
                <div className="header__form">
                <>
                    {location.pathname === '/' ? <FormHeader position={'vertical'}/>: <FormHeader position={'horizontal'}/>}
                    
                     
                </>
            </div> : ''    
            }
                
                </div>
            </header>
        
    )
}

export default Header