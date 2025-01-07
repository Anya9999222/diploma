import { Rating } from './Rating/Rating'
import './SuccessfulOrder.css'

export const SuccessfulOrder = () => {
    return(
        <div className='popup__wrapper'>
            <div className="popup__success">
                <div className='popup__header'>
                    <div className='order__number'>№Заказа 285АА</div>
                    <div className='order__price'>
                        сумма
                        <span className='price__sum'>7760</span>
                        <img src="/src/assets/asideForm/ruble.png" alt="" />
                    </div>
                </div>
                <div className='popup__info'>
                    <div className='popup__info-content'>
                        <div className='info-content-item'>
                            <div className='content-img email'></div>
                            <div className='content-text'>билеты будут <br /> отправлены <br />на ваш e-mail</div>
                        </div>
                        <div className='info-content-item'>
                            <div className='content-img ticket'></div>
                            <div className='content-text'><span className='text-bold'>распечатайте</span> <br /> и сохраняйте билеты<br /> до даты поездки</div>
                        </div>
                        <div className='info-content-item'>
                            <div className='content-img boarding'></div>
                            <div className='content-text'><span className='text-bold'>предьявите</span> распечатанные <br /> билеты при посадке</div>
                        </div>
                    </div>
                </div>
                <div className='popup__main'>
                    <div className='popup__main-title'>Ирина Эдуардовна!</div>
                    <div className='popup__main-text'>
                        Ваш заказ успешно оформлен. <br />
                        В ближайшее время с вами свяжется наш оператор для подтверждения.

                    </div>
                    <div className='popup__main-greetings'>
                        Благодарим Вас за оказанное доверие и желаем приятного путешествия!
                    </div>
                </div>

                <div className='popup__footer'>
                    
                        <div className='footer-feedback-item'>
                            <div className='item-text'>Оценить сервис</div>
                            <Rating/>
                        </div>
                        <div className='footer-feedback-item'>
                            <button className='footer-btn'>Вернуться на главную</button>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}