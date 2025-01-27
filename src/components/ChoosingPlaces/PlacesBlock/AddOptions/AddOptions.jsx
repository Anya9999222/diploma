import { AddOptionItem } from './AddOptionItem'
import './AddOptions.css'

export const AddOptions = (opts) => {

    const handleClick = () => {

    }
    return(
        <>
        {
            opts.have_air_conditioning ? 
            <AddOptionItem item={'conditioning'} /> :
            ''
        }
        {
            opts.have_wifi ? 
            <AddOptionItem item={'wi-fi'} />  :
            ''
        }
        {
             <AddOptionItem item={'linens'} included={opts.is_linens_included ? true : ''}/> 
            
        }

    </>
    )
}