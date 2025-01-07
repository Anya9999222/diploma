import { useState } from 'react'
import './VagonType.css'

export const VagonType = ({type, name, id}) => {
   const [active, setActive] = useState(false);

  

    return(
        <>
        <div className='choose__place-type-item'>
            <div className={`type-icon ${type} ${active ? 'active' : ''}`} onClick={() => setActive(!active)} id={id}></div>
            <p>{name}</p>
        </div>
        </>
       
    )
}