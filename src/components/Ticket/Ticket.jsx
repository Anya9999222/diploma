import { Route } from '../Route/Route';
import { TicketOptions } from './TicketOptions';
import './Ticket.css'
import { TicketOption } from './TicketOption/TicketOption';
import { useNavigate } from 'react-router-dom';

export const Ticket = ({number, btn}) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        

        navigate('/places')
    }
    return(
        <div className="ticket__container">
            <div className="ticket__aside">
                <img src="/src/assets/ticket/train.png" alt="" />
                <h3 className="train__number">{number}</h3>
                <div className="route-aside">
                    Адлер
                    <img src="../../src/assets/Arrow.png" alt="" /><br />
                    Москва
                    <img src="../../src/assets/Arrow.png" alt="" /><br />
                    Санкт-Петербург
                </div>
            </div>
            <div className='ticket__main'>
                
                <Route time={'9:42'} direction={'to'}/>
                <Route time={'9:42'} direction={'from'}/>
               
            </div>
            <div className='ticket__options'>
                {TicketOptions.map((i)=> {
                    console.log(i.type)
                    return(
                        <TicketOption key={i.id} type={i.type} places={i.places} price={i.price}/>
                    )
                })}
                {btn ? 
                <button className='btn-change'>Изменить</button> :
                <button className='choose__btn' onClick={handleClick}>Выбрать места</button>}
                
            </div>
        </div>
    )
}

export default Ticket;