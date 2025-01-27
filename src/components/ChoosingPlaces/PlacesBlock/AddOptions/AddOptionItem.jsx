import { useState } from "react"

export const AddOptionItem = (item, included) => {
    console.log(item.item, included)
    const [active, setActive] = useState(false);
    
    return (
        <div className={`places__main-service-item ${item.item} ${ included ? 'included' : ''} ${active && !included ? 'active' : ''}`} onClick={()=> setActive(!active)}></div>
    )
}