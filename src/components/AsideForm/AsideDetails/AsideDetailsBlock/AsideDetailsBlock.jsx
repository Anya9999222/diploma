import { useState } from 'react'
import { Route } from '../../../Route/Route'
import { AsideDetailsHeader } from '../AsideDetailsHeader/AsideDetailsHeader'
import './AsideDetailsBlock.css'

export const AsideDetailsBlock = ({title, direction}) => {
    const [infoOpen, setInfoOpen] = useState(false);
    return(
        <div className='aside__block' onClick={() => setInfoOpen(!infoOpen)}>
            {<AsideDetailsHeader direction={direction} title={title}/>}
            
            {
                infoOpen ? 
                <div className='aside__block-main'>
                <div className='aside__main-item'>
                    <div className='item__info'>
                        <div className='item__text'>№ Поеезда</div>
                        <div className='item__number'>116C</div>
                    </div>
                    <div className='item__info'>
                        <div className='item__text'>Название</div>
                        <div className='item__number'>
                            <div className='item__city'>Адлер</div>
                            <div className='item__city'>Санкт-Петербург</div>
                            </div>
                    </div>
                </div>
                <>
                    <Route time={'9:42'} direction={direction}/>
                </>
            </div> : ''
            }
           
        </div>
    )
}