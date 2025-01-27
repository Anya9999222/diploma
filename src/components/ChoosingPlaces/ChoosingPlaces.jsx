import { ButtonNext } from '../ButtonNext/ButtonNext'
import './ChoosingPlaces.css'
import { ChoosingPlacesItem } from './ChoosingPlacesItem/ChoosingPlacesItem'
import { useSelector } from 'react-redux'
export const ChoosingPlaces = () => {
    const selTrainId = useSelector(state => state.selectedTrain)
    const tickets = useSelector(state => state.tickets.tickets);

    
    const selectedTrain = tickets.find((i) => {
       return i.departure._id === selTrainId.departure.id
    })
    console.log(selectedTrain , tickets)
    return (
        <div className="choose__place-container">
            <h2 className="choose__place-header">Выбор мест</h2>
             <ChoosingPlacesItem direction={'to'} info={selectedTrain.departure}/>
             {selectedTrain.arrival ? <ChoosingPlacesItem direction={'forward'} info={selectedTrain.arrival}/> : ''}
             
             <ButtonNext link={'/passengers'}/>
        </div>
    )
}