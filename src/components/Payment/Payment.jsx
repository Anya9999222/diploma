import { useNavigate } from 'react-router-dom'
import './Payment.css'

export const Payment = () => {
    const navigator = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        navigator('/check')
    }
    return(
        <div className='payment'>
        <div className="payment__container">
            
            <div className='payment__header'>
                <div className='payment__title'>Персональные данные</div>
            </div>
            <div className='passenger__form-block person'>
            
            <div className='passenger__form-item'>
                <label className='label' htmlFor="">Фамилия</label>
                <input className="input" type="text" />
            </div>
            <div className='passenger__form-item'>
                <label className='label' htmlFor="">Имя</label>
                <input className="input" type="text" />
            </div>
            <div className='passenger__form-item'>
                <label className='label' htmlFor="">Отчество</label>
                <input className="input" type="text" />
            </div>

        </div>
        <div className='payment__contact'>
        <div className='passenger__form-item'>
            <label className='label' htmlFor="">Контактный телефон</label>
            <input type="text" className='input' />
        </div>
        <div className='passenger__form-item'>
            <label className='label' htmlFor="">E-mail</label>
            <input type="mail" className='input' />
        </div>
        </div>
        <div className='payment__header'>
            <div className='payment__title'> Способ оплаты</div>
        </div>
        <div className='payment__container-item'>
            <div className='payment__item'>
                <input className='input__radio' type="checkbox"/> 
                <div className='payment__online'>Онлайн</div>
            </div>
            <div className='payment__item variants'>
                <div className='payment__variant'>Банковской <br />картой</div>
                <div className='payment__variant'>PayPal</div>
                <div className='payment__variant'>Visa QIWI Wallet</div>
            </div>
            <div className='payment__item cash'>
            <input className='input__radio' type="checkbox"/> 
            <div className='payment__online'>Наличными</div>
            </div>
        </div>

        </div>
        <div className='btn__container'>
            <button className='payment__btn' onClick={handleClick}>Купить билеты</button>
        </div>
        
        </div>
        
    ) 
}