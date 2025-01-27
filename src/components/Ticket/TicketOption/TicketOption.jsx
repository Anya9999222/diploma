import { useSelector } from 'react-redux'
import './TicketOption.css'
import { TicketOptionItem } from './TicketOptionItem'

export const TicketOption = () => {

    const availableSeats = useSelector((state) => state.tickets.tickets[0].departure.available_seats_info);
    const priceInfo = useSelector((state) => state.tickets.tickets[0].departure.price_info)
 return(
    <>
        {
            availableSeats.fourth ? <TicketOptionItem 
            type={'Сидячий'}
            places={availableSeats.fourth}
            price={priceInfo.fourth.bottom_price}
            /> : ''
        }
        {
            availableSeats.third ? <TicketOptionItem 
            type={'Плацкарт'}
            places={availableSeats.third}
            price={priceInfo.third.bottom_price}
            /> : ''
        }
        {
            availableSeats.second ? <TicketOptionItem 
            type={'Купе'}
            places={availableSeats.second}
            price={priceInfo.second.bottom_price}
            /> : ''
        }
        {
            availableSeats.first ? <TicketOptionItem 
            type={'Люкс'}
            places={availableSeats.first}
            price={priceInfo.first.bottom_price}
            /> : ''
        }
    </>
 )
}