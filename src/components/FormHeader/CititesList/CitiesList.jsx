import './CitiesList.css'

export const CitiesList = ({list, handleClick}) => {

   
    return(
        <div className="cities__list">
            {list.map((i) => {
                return(
                    <div className='city-item' onClick={() => {handleClick(i)}}>
                        {i.label}
                    </div>
                )
               
            })}
        </div>
    )
}