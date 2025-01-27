import './TrainInfo.css'

export const TrainInfo = ({train, cityFrom, cityTo}) => {
    return(
        <div className="train__info">
            <img src="/src/assets/choosingPlaces/train.png" alt="" />
                                <div className='choose__place-route'>
                                    <div className="choose__place-train__number">{train}</div>
                                    <div className="choose__place-route-aside">
                                        <div className='second__station'> 
                                           {cityFrom}
                                            <img src="/src/assets/choosingPlaces/arrowBlack.png" alt="" /><br />
                                        </div>
                                       
                                        
                                        <div className='third__station'>{cityTo}</div>
                                        
                                    </div>
                                </div>
        </div>
    )
}