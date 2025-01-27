import { useState } from 'react';
import './AsideFormOption.css'
import { useDispatch } from 'react-redux';
import { changeOptionsFields } from '../../../redux/slices/sidebarSelectSlice';

export const AsideFormOption = ({img, name, title}) => {
    const [picked, setPicked] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        setPicked(!picked);
        dispatch(changeOptionsFields({
            name: name,
            value: !picked,
        }))
        
    }

    return(
        <div className="options-item">
                    <img src={img} className="options-icon" alt="" />
                    <span className='options__span'>{title}</span>
                    <div className={`btn__toggle-container ${picked ? 'active' : ''}`} onClick={handleClick}>
                        <div className={`btn__toggle ${picked ? 'active' : ''}`}></div>
                    </div>
                </div>
    )
}