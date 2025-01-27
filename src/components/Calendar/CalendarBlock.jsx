import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './CalendarBlock.css'


export const CalendarBlock = ({onChange, value}) => {


    return(
        <div className="calendar__container">
            <Calendar 
            onChange={onChange} 
            value={value} 
            className={'calendar'}
            next2Label={null}
            prev2Label={null}
            minDate={new Date()}
            navigationLabel={({ date, label, locale, view }) => label = date.toLocaleString('default', { month: 'long' })}
            />
        </div>
    )
}