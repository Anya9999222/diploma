import LastTicket from './LastTicket/LastTicket'
import './LastTickets.css'

export const LastTickets = () => {
    return(
        <div className="last__tickets">
            <div className="last__tickets-title">Последние билеты</div>
            <div className='last__tickets-list'>
                <LastTicket from={'Санкт-Петербург'} to={'Москва'} price={1720} />
                <LastTicket from={'Санкт-Петербург'} to={'Москва'} price={1720} />
                <LastTicket from={'Санкт-Петербург'} to={'Москва'} price={1720} />
            </div>
        </div>
    )
}