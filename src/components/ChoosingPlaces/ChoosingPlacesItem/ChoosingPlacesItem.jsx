import { useState } from 'react'
import { Route } from '../../Route/Route'
import { TrainInfo } from '../TrainInfo/TrainInfo'
import { VagonType } from '../../VagonTypes/VagonType/VagonType'
import { vagonTypes } from '../../VagonTypes/VagonType/VagonTypes'
import './ChoosingPlacesItem.css'
import { PlacesBlock } from '../PlacesBlock/PlacesBlock'
import { sToStr } from '../../../hooks'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeats } from '../../../redux/slices/SeatsSlice'
import { VagonTypes } from '../../VagonTypes/VagonTypes'

export const ChoosingPlacesItem = ({direction, info}) => {
    console.log(info._id)
    const [infoOpen, setInfoOpen] = useState()
    const time = sToStr(info.duration);
    const [active, setActive] = useState(false);
   

    
    const dispatch = useDispatch();

    const openInfo = (e) => {
        setInfoOpen(e)
        dispatch(fetchSeats({
            id: info._id,
            opts: ''
        }))
    }
   
   
    console.log(infoOpen)
    return(
        <div className="choose__place-main">

        <div className={`choose__place-main-header ${direction}`}>
                    <div className={`train__choose-arrow ${direction}`}></div>
                    <button className="train__choose">Выбрать другой поезд</button>
                </div>
                <div className="choose__place-route-container">
                    <TrainInfo train={info.train.name} cityFrom={info.from.city.name} cityTo={info.to.city.name}/>
                    <div className='choose__place-route-info'>
                        <Route direction={direction} info={info}/>
                    </div>
                    <div className='choose__place-time'>
                        <div className='clock-icon'></div>
                        <div className='time-container'>
                            <div className='time-hours'>{time.hours} часов</div>
                            <div className='time-minutes'>{time.mins} минуты</div>
                        </div>
                    </div>
                </div>
                <div className='choose__place-quantity'>
                    <h3 className='choose__place-title'>Количество билетов</h3>
                    <div className='choose__place-quantity-main'>
                        <div className='choose__place-quantity-content adult'>
                            <div className='choose__place-quantity-box'>
                                <p className='quantity-text'>Взрослых - </p>  
                                <input className="quantity__input" type="number" placeholder='0' />             
                            </div>
                            <div className='choose__place-quantity-additional'>
                            Можно добавить еще <br />
                            3 пассажиров 
                            </div>
                        </div>
                        <div className={`choose__place-quantity-content child ${active ? 'active' : ''}`}>
                            <div className='choose__place-quantity-box'>
                                <p className='quantity-text'>Детских - </p>  
                                <input className="quantity__input" type="number" placeholder='0' onChange={() => {setActive(true)}}/>             
                            </div>
                            <div className='choose__place-quantity-additional'>
                            Можно добавить еще 3 детей <br />до 10 лет.Свое место в вагоне, <br />как у взрослых, но дешевле <br />
в среднем на 50-65% 
                            </div>
                        </div>
                        <div className='choose__place-quantity-content infant'>
                            <div className='choose__place-quantity-box'>
                                <p className='quantity-text'>Детских "без места" - </p>  
                                <input className="quantity__input"type="number" placeholder='0'/>             
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
                <div className='choose__place-type'>
                    <h3 className='choose__place-title'>Тип вагона</h3>
                    <div className='choose__place-type-container'>
                        <VagonTypes info={info} onClick={openInfo} activeId={infoOpen}/>
                        
                    </div>
                    <>
                    {
                        
                        infoOpen ? <PlacesBlock id={infoOpen} direction={direction}/> : ''
                    }
                    </>
                </div>
                
                
            </div>
    )
}