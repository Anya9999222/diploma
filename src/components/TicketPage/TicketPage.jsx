import { useSelector } from "react-redux"
import { SortingBlock } from "../SortingBlock/SortingBlock"
import Ticket from "../Ticket/Ticket"

export const TicketPage = () => {
    const data = useSelector(state => state.tickets.tickets)
    console.log(data)
    return(
        <>
        {
            data ? 
            <>
            <SortingBlock num={data.length}/>
            {data.map((i) => {
                return(
                    <Ticket number={i.departure.train.name}  departure={i.departure} arrival={i.arrival}/>
                )
            })}
            </> : ''
            
        }
        </>
    )
}