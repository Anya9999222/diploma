import './PlacesBlock.css'

export const PlacesBlock = (id) => {
    console.log(id)
    return(
        <div className='places'>
                        <div className='places__header'>
                            <div className='places__wagon'>
                                Вагоны
                                <div>
                                    07
                                </div>
                                <div>
                                    09
                                </div>
                            </div>
                            <div className='places__wagon-title'>Нумерация вагонов начинается с головы поезда</div>
                        </div>
                        <div className='places__main'>
                            <div className='places__main-header'>
                                <div className='places__number'>
                                    <div className='number'>07</div>
                                    вагон
                                </div>
                                <div className='places__main-header-container'>
                                    <div className='places__main-box'>
                                        <div className='places__main-left'>
                                            <div className='places__main-block'>
                                                <div className='places__main-title'>Места</div>
                                                <div className='places__main-title-quantity'>21</div>
                                            </div>
                                            <div className='places__main-block'>
                                                <div className='places__main-place-type'>Верхние</div>
                                                <div className='places__main-quantity'>10</div>
                                            </div>
                                            <div className='places__main-block'>
                                                <div className='places__main-place-type'>Нижние</div>
                                                <div className='places__main-quantity'>11</div>
                                            </div>
                                        </div>
                                        <div className='places__main-price'>
                                            <div className='places__main-title'>Стоимость</div>
                                            <div className='places__main-block'>
                                                <div className='places__main-cost'>2 020</div>
                                                <div className='ruble-icon places'></div>
                                            </div>
                                            <div className='places__main-block'>
                                                <div className='places__main-cost'>3 030</div>
                                                <div className='ruble-icon'></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='places__main-service'>
                                        <div className='places__main-title'>Обслуживание ФПК</div>
                                        <div className='places__main-service-block'>
                                            <div className='places__main-service-item conditioning'></div>
                                            <div className='places__main-service-item wi-fi'></div>
                                            <div className='places__main-service-item press'></div>
                                            <div className='places__main-service-item meals'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='places__img'></div>
                    </div>
    )
}