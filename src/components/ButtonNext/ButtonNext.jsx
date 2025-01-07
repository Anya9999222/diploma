import { useNavigate } from 'react-router-dom'
import './ButtonNext.css'

export const ButtonNext = ({link}) => {
    const navigator = useNavigate()
    const handleClick = () => {
        console.log(navigator)
        navigator(link)
    }

    return(
        <div className="btn__next-container">
            <button className='btn__next' onClick={handleClick}>Далее</button>
        </div>
    )
}