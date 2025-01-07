import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './CalendarBlock.css'


export const CalendarBlock = () => {
    const [calendarValue, onChangeCalendar] = useState(new Date());

    return(
        <div className="calendar__container">
            <Calendar 
            onChange={onChangeCalendar} 
            value={calendarValue} 
            className={'calendar'}
            next2Label={null}
            prev2Label={null}
            maxDetail="month"
            />
        </div>
    )
}