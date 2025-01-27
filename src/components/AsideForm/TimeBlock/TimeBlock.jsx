import { TimeSelect } from "../AsideDetails/TimeSelect/TimeSelect"
import './TimeBlock.css'

export const TimeBlock = (direction) => {
    console.log(direction)
    return(
        <div className="time__block">
            <div className="time__block-item">
                <div className="time-item-title">Время отбытия</div>
                <TimeSelect min={0} max={24} step={1} stage={'departure'} direction={direction}/>
            </div>
            <div className="time__block-item">
                <div className="time-title-container">
                    <div className="time-item-title">Время прибытия</div>
                </div>
                
                <TimeSelect min={0} max={24} step={1} stage={'arrival'} direction={direction}/>
            </div>
        </div>
    )
}