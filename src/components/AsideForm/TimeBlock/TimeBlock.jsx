import { TimeSelect } from "../AsideDetails/TimeSelect/TimeSelect"
import './TimeBlock.css'

export const TimeBlock = () => {
    return(
        <div className="time__block">
            <div className="time__block-item">
                <div className="time-item-title">Время отбытия</div>
                <TimeSelect min={0} max={24} step={1}/>
            </div>
            <div className="time__block-item">
                <div className="time-title-container">
                    <div className="time-item-title">Время прибытия</div>
                </div>
                
                <TimeSelect min={0} max={24} step={1}/>
            </div>
        </div>
    )
}