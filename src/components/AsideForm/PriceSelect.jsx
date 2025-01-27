import './PriceSelect.css';
import { useEffect, useRef, useState } from 'react';
import { changePriceFields } from '../../redux/slices/sidebarSelectSlice';
import { useDispatch } from 'react-redux';

export const PriceSelect = ({min,max,step,className,onChange}) => {
  const [inputFrom,setInputFrom ] = useState(min);
  const [inputTo,setInputTo ] = useState(max);
  const sliderRef = useRef(null);
  const maxState = useRef(null);
  const minState = useRef(null);
  const dispatch = useDispatch();

  console.log(inputFrom, inputTo)

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
          // currentState.current.style.right = `${100-(inputFrom-min)/(max-min)*100}%`;
          console.log(sliderRef.current.style.left)
      }
      if (onChange){
          onChange(inputFrom,inputTo);
      }
      
  }, [inputFrom,inputTo])
  
  useEffect(() => {
      const id = setTimeout(() => {
        dispatch(changePriceFields({
          min: inputFrom,
          max: inputTo
        }))
      }, 1000);

      return() => {
        clearTimeout(id)
      }
  },[inputFrom,inputTo])

return (
  <div className={`${className}`}>
      <div className='range__title'>Стоимость</div>
      <div className='range__item'>
        <div className='range__item-from'>от</div>
        <div className='range__item-ещ'>до</div>
      </div>
      <div className="range-slider">
          <span className="range-selected" ref={sliderRef}></span>
      </div>
      <div className="range-input">
          <input type="range" 
          onChange={(e)=>{
            setInputFrom(parseFloat(e.target.value))
            
          }}
          min={min}
          max={max}
          step={step}
          defaultValue={min}
          />
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
        <div className='price__start' ref={minState}>{inputFrom > min ? inputFrom : min}</div>
        {/* <div className='actual' ref={currentState}>{inputTo < max && inputTo}</div> */}
        <div className='price__max' ref={maxState}>{inputTo < max ? inputTo : max}</div>
      </div>
  </div>
)
}