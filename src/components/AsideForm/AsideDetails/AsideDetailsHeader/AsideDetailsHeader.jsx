import { useState } from 'react'
import './AsideDetailsHeader.css'


export const AsideDetailsHeader = ({direction, title, date}) => {
    const [opened, setOpened] = useState(false);

    return(
        <>
        <div className="aside__block-header" onClick={() => {setOpened(!opened)}}>
                <div className={`header-info ${direction}`}>
                    <div className={`header-info-icon ${direction}`}></div>
                    <div className="header-info-title">{title}</div>
                    <div className="header-info-date">{date}</div>
                </div>
                <div className={`icon ${opened ? 'hide' : 'open'}`}></div>
        </div>
        {/* {opened ? <TimeBlock min={0} max={24} step={1}/> : ''} */}
        </>
    )
}