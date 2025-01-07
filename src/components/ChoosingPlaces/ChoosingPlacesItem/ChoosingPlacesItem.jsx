import { useState } from 'react'
import { Route } from '../../Route/Route'
import { TrainInfo } from '../TrainInfo/TrainInfo'
import { VagonType } from '../VagonType/VagonType'
import { vagonTypes } from '../VagonType/VagonTypes'
import './ChoosingPlacesItem.css'
import { PlacesBlock } from '../PlacesBlock/PlacesBlock'

export const ChoosingPlacesItem = ({direction}) => {

    const [infoOpen, setInfoOpen] = useState()

    const openInfo = (e) => {
        setInfoOpen(e.target.id)
    }

    return(
        <div className="choose__place-main">

        <div className={`choose__place-main-header ${direction}`}>
                    <div className={`train__choose-arrow ${direction}`}></div>
                    <button className="train__choose">Выбрать другой поезд</button>
                </div>
                <div className="choose__place-route-container">
                    <TrainInfo/>
                    <div className='choose__place-route-info'>
                        <Route direction={direction}/>
                    </div>
                    <div className='choose__place-time'>
                        <div className='clock-icon'></div>
                        <div className='time-container'>
                            <div className='time-hours'>9 часов</div>
                            <div className='time-minutes'>42 минуты</div>
                        </div>
                    </div>
                </div>
                <div className='choose__place-quantity'>
                    <h3 className='choose__place-title'>Количество билетов</h3>
                    <div className='choose__place-quantity-main'>
                        <div className='choose__place-quantity-content adult'>
                            <div className='choose__place-quantity-box'>
                                <p className='quantity-text'>Взрослых - </p>  
                                <input className="quantity__input" type="text" placeholder='0'/>             
                            </div>
                            <div className='choose__place-quantity-additional'>
                            Можно добавить еще <br />
                            3 пассажиров 
                            </div>
                        </div>
                        <div className='choose__place-quantity-content child'>
                            <div className='choose__place-quantity-box'>
                                <p className='quantity-text'>Детских - </p>  
                                <input className="quantity__input"type="text" placeholder='0'/>             
                            </div>
                            <div className='choose__place-quantity-additional'>
                            Можно добавить еще 3 детей <br />до 10 лет.Свое место в вагоне, <br />как у взрослых, но дешевле <br />
в среднем на 50-65% 
                            </div>
                        </div>
                        <div className='choose__place-quantity-content infant'>
                            <div className='choose__place-quantity-box'>
                                <p className='quantity-text'>Детских "без места" - </p>  
                                <input className="quantity__input"type="text" placeholder='0'/>             
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
                <div className='choose__place-type'>
                    <h3 className='choose__place-title'>Тип вагона</h3>
                    <div className='choose__place-type-container' onClick={openInfo}>
                        {vagonTypes.map((i) => {
                            return(
                                <>
                                    <VagonType type={i.type} name={i.name} id={i.id}/>
                                </>
                            )
                        })}
                    </div>
                    <>
                    {
                        
                        infoOpen ? <PlacesBlock id={infoOpen}/> : ''
                    }
                    </>
                </div>
                
                
            </div>
    )
}