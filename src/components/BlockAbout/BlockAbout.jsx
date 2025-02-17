import './BlockAbout.css'

export const BlockAbout = () => {
    return (
        <div className="main__block about" id='about'>
            <div className='wrapper'>
            <h2>О нас</h2>
            <div className="main__about-content">
                <p>
                    Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем <br />
                    все больше людей заказывают жд билеты через интернет.
                </p>
                <p>
                    Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? <br /> 
                    Мы расскажем о преимуществах заказа через интернет.
                </p>
                <p className='bold'>
                    Покупать жд билеты дешево можно за 90 суток до отправления поезда. <br />
                    Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
                </p>
            </div>
            </div>
        </div>
    )
}