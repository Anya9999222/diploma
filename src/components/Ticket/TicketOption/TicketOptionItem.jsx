import './TicketOption.css'

export const TicketOptionItem = ({type, places, price, key}) => {
 return(
    <div className='ticket-option'>
        <div className='ticket-option-item'>
            <div className='ticket-class'>{type}</div>
            <div className='quantity'>{places}</div>
        </div>
        
        <div className='price'>
            <span className='price-start'>от</span> 
            {price} 
            <div className='ruble-icon'></div>
            {/* <img src="/src/assets/asideForm/ruble.png" alt="" /> */}
        </div>
    </div>
 )
}