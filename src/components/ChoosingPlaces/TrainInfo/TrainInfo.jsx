import './TrainInfo.css'

export const TrainInfo = () => {
    return(
        <div className="train__info">
            <img src="/src/assets/choosingPlaces/train.png" alt="" />
                                <div className='choose__place-route'>
                                    <h3 className="train__number">116C</h3>
                                    <div className="route-aside">
                                        <div className='first__station'>
                                            Адлер
                                            <img src="/src/assets/Arrow.png" alt="" /><br />
                                        </div>
                                        
                                        
                                        <div className='second__station'> 
                                            Москва
                                            <img src="/src/assets/choosingPlaces/arrowBlack.png" alt="" /><br />
                                        </div>
                                       
                                        
                                        <div className='third__station'>Санкт-Петербург</div>
                                        
                                    </div>
                                </div>
        </div>
    )
}