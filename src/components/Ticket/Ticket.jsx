import { Route } from '../Route/Route';
// import { TicketOptions } from './TicketOptions';
import './Ticket.css'
import { TicketOption } from './TicketOption/TicketOption';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTrain } from '../../redux/slices/SelectedTrainSlice';

export const Ticket = ({number,departure, arrival, btn}) => {
    const navigate = useNavigate();
    const depId = departure._id;
    let arrId;
    arrival ?   arrId = arrival._id : '';

   
    console.log(depId, arrId)
    const dispatch = useDispatch();
    // const optsData = useSelector(state => state.tickets.tickets)
    // const ticketOpts = departure.available_seats_info;
    
    // console.log(optsData)
    const handleClick = (e) => {
        // e.preventDefault();
        dispatch(setSelectedTrain({
            departure: {
                id: depId,
            },
            arrival: {
                id: arrId,
            },
        }));
        navigate('/places');
       
        
    }
    return(
        <div className="ticket__container">
            <div className="ticket__aside">
                <img src="/src/assets/ticket/train.png" alt="" />
                <h3 className="train__number">{number}</h3>
                <div className="route-aside">
                    {departure.from.city.name}
                    <img src="/src/assets/Arrow.png" alt="" /><br />
                    {departure.to.city.name}
                </div>
            </div>
            <div className='ticket__main'>
                
                <Route info={departure} time={true} direction={'to'}/>
                {arrival ? <Route info={arrival} time={true} direction={'forward'}/> : ''}
                
               
            </div>
            <div className='ticket__options'>
                <TicketOption />
                {btn ? 
                <button className='btn-change'>Изменить</button> :
                <button className='choose__btn' onClick={handleClick}>Выбрать места</button>}
                
            </div>
        </div>
    )
}

export default Ticket;