import './AsideForm.css'
import { PriceSelect } from './PriceSelect';
import { options } from './AsideFormOptions/AsideFormOptions';
import { AsideFormOption } from './AsideFormOptions/AsideFormOption';
import { AsideDetailsHeader } from './AsideDetails/AsideDetailsHeader/AsideDetailsHeader';
import { useState } from 'react';
import { TimeBlock } from './TimeBlock/TimeBlock';

export const AsideForm = () => {
    const [infoToOpen, setInfoToOpen] = useState(false);
    const [infoForwardOpen, setInfoForwardOpen] = useState(false);
    return(
        <div className="aside__form-container">
            <div className="date__container">
                <div className='date__container-to'>
                    <label htmlFor="">Дата поездки</label>
                    <div className='date__input-container'>
                        <input readOnly type="text" className='date__container-input'/>
                        <div className='calendar-icon'></div>
                    </div>
                    
                </div>
                <div className='date__container-from'>
                    <label htmlFor="">Дата возвращения</label>
                    <div className='date__input-container'>
                        <input readOnly type="text" className='date__container-input'/>
                        <div className='calendar-icon'></div>
                    </div>
                </div>
            </div>
            <div className="options-container">
                {options.map((i) => {
                    return(
                        <AsideFormOption key={i.id} img={i.img} name={i.name} />
                    )
                    
                })}

            </div>
            <>
        <PriceSelect
            min={1000}
            max={7000}
            step={0.1}     
            className="price__wrapper"
           

        />
       
      </>
            <div className='aside__form-directions' onClick={() => setInfoToOpen(!infoToOpen)}>
                <AsideDetailsHeader direction={'to'} title={'Туда'}/>
                {infoToOpen ? <TimeBlock />: ''}
            </div>
            <div className='aside__form-directions' onClick={() => setInfoForwardOpen(!infoForwardOpen)}>
                 <AsideDetailsHeader direction={'from'} title={'Обратно'}/>
                 {infoForwardOpen ? <TimeBlock/> : ''}
            </div>
        </div>
    )
}

export default AsideForm;