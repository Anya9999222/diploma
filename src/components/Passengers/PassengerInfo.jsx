import { useState } from 'react'
import './PassengerInfo.css'

export const PassengerInfo = () => {
    const [activeIcon, setActiveIcon] = useState('female')

    const handleClick = (item) => {
        setActiveIcon(item)
    }
    
    return(
        <>
        <div className='passenger__main'>
        
        <div className='passenger__main-select'>
        <select className='passenger__main-select' name="" id="">
            <option value="">Взрослый</option>
            <option value="">Детский</option>
        </select>
    </div>
    <form action="" className='passenger__form'>
        <div className='passenger__form-block person'>
            
            <div className='passenger__form-item'>
                <label className='label' htmlFor="">Фамилия</label>
                <input className="input" type="text" />
            </div>
            <div className='passenger__form-item'>
                <label className='label' htmlFor="">Имя</label>
                <input className="input" type="text" />
            </div>
            <div className='passenger__form-item'>
                <label className='label' htmlFor="">Отчество</label>
                <input className="input" type="text" />
            </div>

        </div>
        <div className='passenger__form-block additional'>
            <div className='passenger__form-additional-item'>
                <label className='label' htmlFor="">Пол</label>
                <div className='option__block'>
                    <div className={`option__block-item ${activeIcon === 'male' ? 'active' : ''}`} onClick={() => handleClick('male')}>М</div>
                    <div className={`option__block-item ${activeIcon === 'female' ? 'active' : ''}`} onClick={() => handleClick('female')}>Ж</div>
                </div>
            </div>
            <div className='passenger__form-item'>
                <label className='label' htmlFor="">Дата рождения</label>
                <input className="input" type="text" placeholder='ДД/ММ/ГГ'/>
            </div>
        </div>
        <div className='passenger__form-block ability'>
            <input className='input__radio' type="checkbox" />
            <label htmlFor="">Ограниченная подвижность</label>
        </div>
        <div className='passenger__form-block documents'>
        <div className='passenger__form-item'>
                <label className='label' htmlFor="">Тип документа</label>
                <select className='documents-input' name="" id="">
                    <option value="">Паспорт РФ</option>
                    <option value="">Свидетельство о рождении</option>
                </select>
            </div>
            <div className='passenger__form-item'>
                <label className='label' htmlFor="">Серия</label>
                <input className='documents-input' type="text" min={4} max={4} />
            </div>
            <div className='passenger__form-item'>
                <label className='label' htmlFor="">Номер</label>
                <input className='documents-input' type="text" min={6} max={6} />
            </div>
        </div>
    </form>
    </div>
    <div className='passenger__footer'>
        <button className='next__passenger'>Следующий пассажир</button>
    </div>
    
    </>
    )
}