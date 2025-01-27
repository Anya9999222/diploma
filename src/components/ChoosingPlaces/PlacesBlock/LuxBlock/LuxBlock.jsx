import './LuxBlock.css'

export const LuxBlock = (seats) => {
    let seatsAvailable = [];

    seats.seats.map((i)=> {
        i.available ? seatsAvailable.push(i.index) : ''
    })

    const arr = Array.from({ length: 16 }, (_, i) => i + 1);


    const places = arr.map((seat) =>
     
        seatsAvailable?.includes(seat) ? {index: seat, available: true} : {index: seat, available: false}
     
     );

    return(
        <div className="lux__block-container">
            
            <>
            {places.map((i) => {
                
                console.log(i)
                return(
                    <>
                    <button 
                    className={`place__btn ${i.available ? 'available' : ''} ${i.index % 2 === 0 ? 'left' : 'right'}`}
                    
                    >{i.index}
                    </button>
                    </>
                )
                
            })}

            {
                
            }
            </>
        </div>
    )
}