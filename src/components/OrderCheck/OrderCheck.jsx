import { useNavigate } from "react-router-dom"
import Ticket from "../Ticket/Ticket"
import './OrderCheck.css'
import { PassengerCard } from "./PassengerCard"

export const OrderCheck = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/success')
    }
    return(
        <div className="order__check">
            <div className="order__block">
                <div className="order__block-header">
                    <div className="order__block-title">Поезд</div>
                </div>
                
                <Ticket number={'116C'} btn={true}/>
            </div>
            <div className="order__block">
                <div className="order__block-header">
                    <div className="order__block-title">Пассажиры</div>
                </div>
                <div className="order__block-content">
                    <div className="order__block-passengers">
                        <PassengerCard />
                        <PassengerCard />
                        <PassengerCard />
                    </div>
                    <div className="order__block-price">
                        <div className="order__block-price-container">
                            <span>Всего</span>
                            <div className="price">
                                7760
                                <div className="ruble-icon"></div>
                            </div>
                        </div>
                        <div className="btn__container">
                        <button className='btn-change'>Изменить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="order__block">
                <div className="order__block-header">
                    <div className="order__block-title">Способ оплаты</div>
                </div>
                <div className="order__block-payment">
                    <span>Наличными</span>
                    <div className="btn__container">
                        <button className='btn-change'>Изменить</button>
                    </div>
                </div>
                
            </div>
            <div className="order__block-footer">
                <button className="confirm__btn" onClick={handleClick}>подтвердить</button>
            </div>
        </div>
    )
}