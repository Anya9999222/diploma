import { useEffect, useState } from 'react'
import { CalendarBlock } from '../Calendar/CalendarBlock'
import { setDate } from '../../redux/slices/RouteSlice'
import './DateInput.css'
import { useDispatch, useSelector } from 'react-redux'
import { formatDate } from '../../hooks'

export const DateInput = ({direction, label}) => {
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [value, onChangeCalendar] = useState(new Date());
    const [formatedDate, setFormatDate] = useState()

    const date = useSelector((state) => state.route[direction].date);
    const dispatch = useDispatch();
    console.log(date);
    
    useEffect(() => {
        if(date){
            setFormatDate(formatDate(date))
        }
    })
    

    const onChange = (e) => {

        onChangeCalendar(e);
        
        const formattedDate = formatDate(e);
        console.log(value, e)
        setFormatDate(formattedDate);
        dispatch(setDate({direction: direction, date: e}))
        setCalendarOpen(false)
    }


    return(
        <div className='input__container-item'>
            <label  className='header__label aside' htmlFor="from">{label}</label>
            <input readOnly type="text" className="date__input date" placeholder='ДД/ММ/ГГ' value={formatedDate} onClick={() => {setCalendarOpen(!calendarOpen)}} />
            <div className='date-icon'></div>
            {calendarOpen ? <CalendarBlock value={value} onChange={onChange}/> : ''}
        </div>
    )
}