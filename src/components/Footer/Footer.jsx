import './Footer.css'

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__contact" id='contact'>
                <h2 className='foooter-header'>Свяжитесь с нами</h2>
                <div className="footer__contact-item">
                    <img src="/src/assets/footer/phone.png" className='footer-img' alt="" />
                    <a href="#">8 (800) 000 00 00</a>
                </div>
                <div className="footer__contact-item">
                    <img src="/src/assets/footer/mail.png" className='footer-img' alt="" />
                    <a href="#">inbox@mail.ru</a>
                </div>
                <div className="footer__contact-item">
                    <img src="/src/assets/footer/skype.png" className='footer-img'alt="" />
                    <a href="#">tu.train.tickets</a>
                </div>
                <div className="footer__contact-item">
                    <img src="/src/assets/footer/location.png" className='footer-img' alt="" />
                    <a href="#">г. Москва <br />ул. Московская 27-35 <br />555 555</a>
                </div>
            </div>
            <div className="footer__subscribe">
                <div className="footer_subscribe-item">
                    <h2 className='foooter-header'>Подписка</h2>
                    <form action="" className='footer-form'>
                        <div className='footer-form-block'>
                            <label htmlFor="email">Будьте в курсе событий</label>

                            <input className='footer-form__input' type="email" name='email' placeholder='e-mail'/>
                        </div>
                        
                        <button className='button footer'>Отправить</button>
                    </form>
                </div>
                
                <div className="footer__subscribe-item">
                    <h2 className='foooter-header'>Подписывайтесь на нас</h2>
                    <div className='subscribe-logos'>
                    <img src="../../src/assets/footer/youtube.png" className='footer-img' alt="" />
                    <img src="../../src/assets/footer/linkedin.png" className='footer-img' alt="" />
                    <img src="../../src/assets/footer/google.png" className='footer-img' alt="" />
                    <img src="../../src/assets/footer/facebook.png" className='footer-img' alt="" />
                    <img src="../../src/assets/footer/twitter.png" className='footer-img' alt="" />
                    </div>
                </div>
            </div>
            <div className="footer__item">
                <span className="footer__logo">Logo</span>
                <img src="../../src/assets/footer/arrow.png" className="footer-item-img" alt="" />
                <span className="footer__web">2018 web</span>
            </div>
        </footer>
    )
}

export default Footer