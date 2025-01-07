import './AsideDetails.css'
import { AsideDetailsBlock } from './AsideDetailsBlock/AsideDetailsBlock'
import { AsidePassengers } from './AsidePassengers/asidePassengers'

export const AsideDetails = () => {
    return(
        <div className="aside__details">
            <div className='details__header'>
                <h2>Детали поездки</h2>
            </div>
            <>
                <AsideDetailsBlock title={'Туда'} direction={'to'}/>
                <AsideDetailsBlock title={'Обратно'} direction={'from'}/>
            </>
            <>
                <AsidePassengers/>
            </>
            <div className='aside__details-total'>
                <div className='aside__details-total-item'>Итог</div>
                <div className='aside__details-total-item'>
                     <div className='aside__details-total-price'>7760</div>
                     <div className='ruble-icon aside-det'></div>
                </div>
            </div>
        </div>
    )
}