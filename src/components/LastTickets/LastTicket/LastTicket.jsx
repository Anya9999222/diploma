import './LastTicket.css'

export const LastTicket = ({from, to, price}) => {
    return(
        <div className="last__ticket-container">
            <div className='last__ticket-block'>
            <div className="last__ticket-route-block right">
                <span className="ticket-from city">{from}</span>
                <span className="ticket-from station">Курский <br />вокзал</span>
            </div>
            <div className="last__ticket-route-block left">
                <span className="ticket-from city">{to}</span>
                <span className="ticket-from station">Московский <br /> вокзал</span>
            </div>
            </div>
            <div className='last__ticket-block'>
            <div className="last__ticket-options">
                <img src="/src/assets/asideForm/options.png" alt="" />
            </div>
            <div className="last__ticket-item">от 
                <div className='last__ticket-price'>{price}</div>
                <img src="/src/assets/asideForm/ruble.png" alt="" />
            </div>
            </div>
            
        </div>
    )
}

export default LastTicket