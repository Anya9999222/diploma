// import { LastTicketApi } from '../../redux/service.js/LastTicketApi'
import LastTicket from './LastTicket/LastTicket'
import { useEffect, useState } from 'react'
import './LastTickets.css'
import { fetchTickets } from '../../redux/slices/LastTicketsSlice'
// import { selectLastTickets, selectError } from '../../redux/slices/LastTicketsSlice'
import { useDispatch, useSelector } from 'react-redux'
export const LastTickets = () => {
    const lastTickets = useSelector((state) => state.lastTickets.lastTickets);
    // const error = useSelector(selectError);
    const dispatch = useDispatch();
    const [info, setData] = useState([]);
    // console.log(lastTickets)

    useEffect(() => {
        dispatch(fetchTickets());
    }, [])
    // useEffect(() => {
    //     fetch( 'https://students.netoservices.ru/fe-diplom/routes/last' )
    // .then( response => response.json())
    // .then( data => {
        
    //     data.forEach(element => {
    //         setData([...info],{
                
    //                         fromStation: element.departure.from.railway_station_name,
    //                         fromCity: element.departure.from.city.name,
    //                         toStation: element.departure.to.railway_station_name,
    //                         toCity: element.departure.to.city.name,
    //                         minPrice: element.departure.min_price
                        
    //         })
    //     });
       
    // });
    // }, [])
    
    // console.log(info)
    // const test = data.map((i) => {
    //     console.log(i)
    // })
    return(
        <div className="last__tickets">
            <div className="last__tickets-title">Последние билеты</div>
            <div className='last__tickets-list'>
                <>
                {
               lastTickets?.slice(-3).map((ticket) => (
                     <LastTicket key={ticket.id} ticket={ticket} />
                  ))}
                </>
                {/* <LastTicket from={'Санкт-Петербург'} to={'Москва'} price={1720} />
                <LastTicket from={'Санкт-Петербург'} to={'Москва'} price={1720} />
                <LastTicket from={'Санкт-Петербург'} to={'Москва'} price={1720} /> */}
            </div>
        </div>
    )
}