import './LastTicket.css'

export const LastTicket = ({key, ticket}) => {
    
    return(
        
        <div className="last__ticket-container">
            <div className='last__ticket-block'>
            <div className="last__ticket-route-block right">
                <span className="ticket-from city">{ticket.from.city}</span>
                <span className="ticket-from station">{ticket.from.station}</span>
            </div>
            <div className="last__ticket-route-block left">
                <span className="ticket-from city">{ticket.to.city}</span>
                <span className="ticket-from station">{ticket.to.station}</span>
            </div>
            </div>
            <div className='last__ticket-block'>
            <div className="last__ticket-options">
                <img src="/src/assets/asideForm/options.png" alt="" />
            </div>
            <div className="last__ticket-item">от 
                <div className='last__ticket-price'>{ticket.price}</div>
                <img src="/src/assets/asideForm/ruble.png" alt="" />
            </div>
            </div>
            
        </div>
    )
}

export default LastTicket