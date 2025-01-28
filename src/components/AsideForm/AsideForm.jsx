import './AsideForm.css'
import { PriceSelect } from './PriceSelect';
import { options } from './AsideFormOptions/AsideFormOptions';
import { AsideFormOption } from './AsideFormOptions/AsideFormOption';
import { AsideDetailsHeader } from './AsideDetails/AsideDetailsHeader/AsideDetailsHeader';
import { useEffect, useState } from 'react';
import { TimeBlock } from './TimeBlock/TimeBlock';
import { DateInput } from '../DateInput/DateInput';
import { useSelector } from 'react-redux';
import { formatUrl } from '../../hooks';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/slices/SearchOptionsSlice';

export const AsideForm = () => {
    const [infoToOpen, setInfoToOpen] = useState(false);
    const [infoForwardOpen, setInfoForwardOpen] = useState(false);

    const state = useSelector(state => state.sidebarSelect);
    const cityInfo = useSelector(state => state.route);

    const dispatch = useDispatch()
    
   

    useEffect(() => {
        const opts = formatUrl(state);
        const url ={
            from: cityInfo.from,
            to: cityInfo.to,
            opts: opts
        }
        dispatch(fetchData(url))
    }, [state])


    return(
        <div className="aside__form-container">
            <div className="date__container">
                <div className='aside__input-box'>
                    <DateInput direction={'from'} label={'Дата поездки'}/>
                </div>
                <div className='aside__input-box'>
                    <DateInput direction={'to'} label={'Дата возвращения'}/>
                </div>
               
            </div>
            <div className="options-container">
                {options.map((i) => {
                    return(
                        <AsideFormOption key={i.id} img={i.img} name={i.name} title={i.title}/>
                    )
                    
                })}

            </div>
            <>
        <PriceSelect
            min={1000}
            max={7000}
            step={10}     
            className="price__wrapper"
           

        />
       
      </>
            <div className='aside__form-directions' >
                <div className='aside__header-box' onClick={() => setInfoToOpen(!infoToOpen)}>
                <AsideDetailsHeader direction={'to'} title={'Туда'}/>
                </div>
                
                {infoToOpen ? <TimeBlock direction={'to'}/>: ''}
            </div>
            <div className='aside__form-directions'>
                <div className='aside__header-box' onClick={() => setInfoForwardOpen(!infoForwardOpen)}>
                <AsideDetailsHeader direction={'from'} title={'Обратно'}/>

                </div>
                 
                 {infoForwardOpen ? <TimeBlock direction={'from'}/> : ''}
            </div>
        </div>
    )
}

export default AsideForm;