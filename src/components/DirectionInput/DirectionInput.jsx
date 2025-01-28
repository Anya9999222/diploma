import { useDebounce } from 'use-debounce';
import './DirectionInput.css'
import { useEffect, useState } from 'react'
import { setCity } from '../../redux/slices/RouteSlice';
import { CitiesList } from '../FormHeader/CititesList/CitiesList';
import { useDispatch, useSelector } from 'react-redux';

export const DirectionInput = ({label, placeholder, icon, direction, onChange, value}) => {
    // const [value, setValue] = useState()
    const [citiesList, setCitiesList] = useState([]);
    const [listOpened, setListOpened] = useState(true)
    const [itemPicket, setItemPicked] = useState(false)
    const [debounce] = useDebounce(value, 300);

    const dispatch = useDispatch();

    console.log(citiesList.length)

    const citiesFetch = async (name) => {
        try {
            const response = await fetch(
               `https://students.netoservices.ru/fe-diplom/routes/cities?name=${name}`
            );
            if (!response.ok) {
               throw new Error('Что-то пошло не так');
            }
            const data = await response.json();
            setCitiesList(
               // eslint-disable-next-line dot-notation
               data.map((city) => ({ label: city.name, value: city['_id'] }))
            );
         } catch (err) {
            console.log(err)
         }
         
        
         console.log(citiesList, name)
    }
    
    useEffect(() => {
        if (value?.trim() === '') {
            return;
         }
         if (debounce) {
            citiesFetch(value)
         }

         if(citiesList.length > 0){
            value !== citiesList[0].label ? setListOpened(true) : ''
         }
         
    }, [debounce])

    const handleClick = (item) => {
        // setValue(item.label);
        setListOpened(false);
        onChange(item.label);
        dispatch(setCity({direction: direction, city: item}))
    }
    
    return(
        <div className='input__container-item'>
            <label className='header__label' htmlFor="from__input">{label}</label>
            <input type="text" className="form__input from" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} required/>
            <div className={icon}></div>
            {listOpened ? <CitiesList list={citiesList} handleClick={handleClick}/> : ''}
        </div>
    )
}