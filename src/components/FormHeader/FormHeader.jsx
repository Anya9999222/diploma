import { useNavigate } from 'react-router-dom';
import './FormHeader.css'


export const FormHeader = ({position}) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        navigate('./trains')
    }
    return(
        <div className={`form-container ${position}`}>
            <form className="form-header" action="">
                <div className={`form__input-container ${position}`}>
                    <div className='form__input-container-item'> 
                    <div className='input__container-item'>
                        <label className='header__label' htmlFor="from">Направление</label>
                        <input type="text" className="form__input from" placeholder='Откуда'/>
                    </div>
                    <div className='change-icon'></div>
                        <input type="text" className="form__input to"/>
                    </div>

                    <div className='form__input-container-item'>
                    <div className='input__container-item'>
                        <label  className='header__label' htmlFor="from">Дата</label>
                        <input type="text" className="form__input date-to" placeholder='ДД/ММ/ГГ'/>
                    </div>
                    <input type="text" className="form__input date-from" placeholder='ДД/ММ/ГГ'/>
                    </div>
                    

                    
                </div>
                <button className='form-button' onClick={handleClick} >Найти билеты</button>
            </form>
        </div>
    )
}

export default FormHeader;