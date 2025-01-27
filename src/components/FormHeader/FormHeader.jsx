import { useNavigate } from 'react-router-dom';
import './FormHeader.css'
import { DirectionInput} from '../DirectionInput/DirectionInput';
import { DateInput } from '../DateInput/DateInput';
import { useDispatch, useSelector } from 'react-redux';
import { formatUrl } from '../../hooks';
import { fetchData } from '../../redux/slices/SearchOptionsSlice';
import { useState } from 'react';
import { useCallback } from 'react';


export const FormHeader = ({position}) => {
    const navigate = useNavigate();
    const state = useSelector((state) => state.route)
    const dispatch = useDispatch();

    const [directionFrom, setDirectionFrom] = useState('');
    const [directionTo, setDirectionTo] = useState('');

  const switchDirections = useCallback(() => {
    setDirectionFrom(directionTo);
    setDirectionTo(directionFrom);
  }, [directionFrom, directionTo]);

    const handleClick = (e) => {
        e.preventDefault();
        navigate('./trains')
        dispatch(fetchData(state))
       
        formatUrl(state)
    }

    return(
        <div className={`form-container ${position}`}>
            <form className="form-header" action="" onSubmit={handleClick}>
                <div className={`form__input-container ${position}`}>
                    <div className='form__input-container-item'> 
                        <div className='input__box'>
                        <DirectionInput label={'Направление'} placeholder={'Откуда'} icon={'direction-icon'} direction={'from'} onChange={setDirectionFrom} value={directionFrom}/>
                        </div>
                        
                        <div className='change-icon' onClick={switchDirections}></div>
                        <div className='input__box'>
                        <DirectionInput placeholder={'Куда'} icon={'direction-icon'} direction={'to'} onChange={setDirectionTo} value={directionTo}/>
                        </div>
                    </div>

                    <div className='form__input-container-item'>
                        <div className='input__box'>
                        <DateInput direction={'from'} label={'Дата'}/>
                        </div>
                        <div className='input__box'>
                        <DateInput direction={'to'}/>
                        </div>
                    </div>
                </div>
                <button className='form-button' type='submit' >Найти билеты</button>
            </form>
        </div>
    )
}

export default FormHeader;