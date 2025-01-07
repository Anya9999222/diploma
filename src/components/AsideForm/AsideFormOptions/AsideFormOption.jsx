import { useState } from 'react';
import './AsideFormOption.css'

export const AsideFormOption = ({img, name}) => {
    const [picked, setPicked] = useState(false);

    return(
        <div className="options-item">
                    <img src={img} className="options-icon" alt="" />
                    <span className='options__span'>{name}</span>
                    <div className={`btn__toggle-container ${picked ? 'active' : ''}`} onClick={() => {setPicked(!picked)}}>
                        <div className={`btn__toggle ${picked ? 'active' : ''}`}></div>
                    </div>
                </div>
    )
}