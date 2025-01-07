import { useState, useEffect, useRef } from "react";
import './TimeSelect.css';

export const TimeSelect = ({min,max,step,onChange}) => {
    const [inputFrom,setInputFrom ] = useState(min);
      const [inputTo,setInputTo ] = useState(max);
      const sliderRef = useRef(null);
      const maxState = useRef(null);
      const minState = useRef(null);
    
      useEffect(() => {
          if (sliderRef.current===null) return;
          if (inputFrom>inputTo){
              sliderRef.current.style.right = `${100-(inputFrom-min)/(max-min)*100}%`;
              sliderRef.current.style.left = `${(inputTo-min)/(max-min)*100}%`;
          }else{
              sliderRef.current.style.right = `${100-(inputTo-min)/(max-min)*100}%`;
              sliderRef.current.style.left = `${(inputFrom-min)/(max-min)*100}%`;
              maxState.current.style.left = `${(inputTo-min)/(max-min)*90}%`;
              minState.current.style.left = `${(inputFrom-min)/(max-min)*90}%`;
          }
          if (onChange){
              onChange(inputFrom,inputTo);
          }
          
      }, [inputFrom,inputTo])
      
    return(
        <div className="time__select">
            <div className="time-slider">
          <span className="range-selected" ref={sliderRef}></span>
      </div>
      <div className="time-input">
          <input type="range" 
          onChange={(e)=>{
            setInputFrom(parseFloat(e.target.value))}}
          min={min}
          max={max}
          step={step}
          defaultValue={min}/>
          <input type="range"
          onChange={(e)=>{
            setInputTo(parseFloat(e.target.value))
          }}
          min={min}
          max={max}
          step={step}
           defaultValue={max}/>
      </div>
      <div className='prices__range'>
        <div className='price__start' ref={minState}>{inputFrom > min ? inputFrom : min}:00</div>
        {/* <div className='actual' ref={currentState}>{inputTo < max && inputTo}</div> */}
        <div className='price__max' ref={maxState}>{inputTo < max ? inputTo : max}:00</div>
      </div>
  </div>
    )
}