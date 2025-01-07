import './ModalInfo.css';

export const ModalInfo = () => {
    return(
        <div className='modal__container'>
        <div className='modal__info'>
            <div className='modal__info-heaader'>
                <div className='modal-icon'></div>
            </div>
            <div className='modal__error-main'>
                <p className='modal__text'>
                Таким образом консультация с широким активом в значительной степени обуславливает создание модели развития. 

                </p>
                <p className='modal__text'>
        
                Повседневная практика показывает, что сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных
                </p>
            </div>
            <div className='modal__footer'>
                <button className='btn__accept'>Понятно</button>
            </div>
        </div>
        </div>
    )
    
}