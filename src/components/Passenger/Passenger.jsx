import './Passenger.css';

import { PassengerInfo } from '../Passengers/PassengerInfo';
import { useState } from 'react';

export const Passenger = () => {
    const [active, setActive] = useState(false)

    const onClick = () => {
        console.log(active)
        active ? setActive(false) : setActive(true)         
    }
    return(
        <div className='passenger__container'>
            <div className='passenger__header' onClick={onClick}>
                <div className='passenger__header-main'>
                    <div className={`pax__icon ${active ? `opened` : `closed`}`}></div>
                    <div className='passenger__title'>Пассажир 1</div>
                </div>
                {active ? <div className='passenger__header-close'></div> : ''}
                
            </div>
            {active ? <PassengerInfo/> : ''}
        </div>
    )
}