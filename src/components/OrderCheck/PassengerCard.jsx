import './PassengerCard.css'

export const PassengerCard = () => {
    return(
        <div className="passenger__card">
            <div className='passenger__card-aside'>
                <div className='pax-icon'></div>
                <span className='passenger__card-aside-text'>Взрослый</span>
            </div>
            <div className='passenger__card-main'>
                <div className='passenger__name'>Мартынюк Ирина Эдуардовна</div>
                <div className='passenger__info'>Пол женский</div>
                <div className='passenger__info'>Дата рождения 17.02.1985</div>
                <div className='passenger__info'>Паспорт РФ 4204 380694</div>
            </div>
        </div>
    )
}