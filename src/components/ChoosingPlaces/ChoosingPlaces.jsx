import { ButtonNext } from '../ButtonNext/ButtonNext'
import './ChoosingPlaces.css'
import { ChoosingPlacesItem } from './ChoosingPlacesItem/ChoosingPlacesItem'

export const ChoosingPlaces = () => {
    return (
        <div className="choose__place-container">
            <h2 className="choose__place-header">Выбор мест</h2>
             <ChoosingPlacesItem direction={'to'}/>
             <ChoosingPlacesItem direction={'forward'}/>
             <ButtonNext link={'/passengers'}/>
        </div>
    )
}