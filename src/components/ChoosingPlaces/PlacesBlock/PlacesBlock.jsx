import { LuxBlock } from './LuxBlock/LuxBlock';
import './PlacesBlock.css'
import { useSelector } from 'react-redux';
import { SecondClassBlock } from './SecondClBlock/SecondClassBlock';
import { ThirdClassBlock } from './ThirdClassBlock/ThirdClassBlock';
import { FourthClassBlock } from './FourthClassBlock/FourthClassBlock';
import { AddOptions } from './AddOptions/AddOptions';
export const PlacesBlock = ({id, direction}) => {
    const seatsInfo = useSelector(state => state.seats.seats);
    let selectedClass 
    
    seatsInfo ? selectedClass=seatsInfo.find(i => {return(i.coach.class_type === id)} ) : ''
    console.log(selectedClass, seatsInfo)
    

    return(
        <>
        {!selectedClass ? '' :
            <div className='places'>
                        <div className='places__header'>
                            <div className='places__wagon'>
                                Вагоны
                                <div>
                                    07
                                </div>
                                <div>
                                    09
                                </div>
                            </div>
                            <div className='places__wagon-title'>Нумерация вагонов начинается с головы поезда</div>
                        </div>
                        <div className='places__main'>
                            <div className='places__main-header'>
                                <div className='places__number'>
                                    <div className='number'>07</div>
                                    вагон
                                </div>
                                <div className='places__main-header-container'>
                                    <div className='places__main-box'>
                                        <div className='places__main-left'>
                                            <div className='places__main-block'>
                                                <div className='places__main-title'>Места</div>
                                                <div className='places__main-title-quantity'>{selectedClass.coach.available_seats}</div>
                                            </div>
                                            {
                                                selectedClass.coach.class_type === 'second'  || selectedClass.coach.class_type === 'third' ? 
                                            <>
                                            <div className='places__main-block'>
                                                <div className='places__main-place-type'>Верхние</div>
                                                <div className='places__main-quantity'>10</div>
                                            </div>
                                            <div className='places__main-block'>
                                                <div className='places__main-place-type'>Нижние</div>
                                                <div className='places__main-quantity'>11</div>
                                            </div>
                                            </> : ''
                                            }
                                            {/* <div className='places__main-block'>
                                                <div className='places__main-place-type'>Верхние</div>
                                                <div className='places__main-quantity'>10</div>
                                            </div>
                                            <div className='places__main-block'>
                                                <div className='places__main-place-type'>Нижние</div>
                                                <div className='places__main-quantity'>11</div>
                                            </div> */}
                                        </div>
                                        <div className='places__main-price'>
                                            <div className='places__main-title'>Стоимость</div>
                                            <div className='places__main-block'>
                                                <div className='places__main-cost'>{selectedClass.coach.top_price}</div>
                                                <div className='ruble-icon places'></div>
                                            </div>
                                            {
                                                selectedClass.coach.class_type === 'second' || selectedClass.coach.class_type === 'third' 
                                                ? 
                                                <>
                                                    <div className='places__main-block'>
                                                <div className='places__main-cost'>{selectedClass.coach.bottom_price}</div>
                                                <div className='ruble-icon'></div>
                                            </div> 
                                                </> : ''
                                            
                                            }
                                            {/* <div className='places__main-block'>
                                                <div className='places__main-cost'>3 030</div>
                                                <div className='ruble-icon'></div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className='places__main-service'>
                                        <div className='places__main-title'>Обслуживание ФПК</div>
                                        <div className='places__main-service-block'>
                                            <AddOptions />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`places__img  ${id}`}>
                            <div className='places__container'>
                                {
                                    id === 'first' ? <LuxBlock seats={selectedClass.seats}/> : ''
                                }
                                {
                                    id === 'second' ? <SecondClassBlock seats={selectedClass.seats}/> : ''
                                }
                                {
                                    id === 'third' ? <ThirdClassBlock seats={selectedClass.seats}/> : ''
                                }
                                {
                                    id === 'fourth' ? <FourthClassBlock seats={selectedClass.seats}/> : ''
                                }
                            </div>
                        </div>
                    </div>

        }
        
        </>
    )
}