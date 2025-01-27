import './SecondClassBlock.css'
export const SecondClassBlock = (seats) => {
    let seatsAvailable = [];

    seats.seats.map((i)=> {
        i.available ? seatsAvailable.push(i.index) : ''
    })

    const arr = Array.from({ length: 32 }, (_, i) => i + 1);


    const places = arr.map((seat) =>
     
        seatsAvailable?.includes(seat) ? {index: seat, available: true} : {index: seat, available: false}
     
     );


    return(
        <div className="second__class-block">
             <div className='second__class-top-seats'>
                {
                    places.map((i) => {
                        if(i.index % 2 === 0) return( 
                        <button className={`second__class-btn top ${i.available ? 'available' : ''}`}> {i.index}</button>
                    )
                        
                        
                           
                        
                    })
                }
             </div>
             <div className='second__class-bottom-seats'>
                {
                    places.map((i) => {
                        if(i.index % 2 !== 0) return( 
                        <button className={`second__class-btn bottom ${i.available ? 'available' : ''}`}> {i.index}</button>
                    )
                    })
                }
             </div>
             {/* {places.map((i) => {
                
                console.log(i)
                return(
                    <>
                    <button 
                    className={`second__class-btn ${i.available ? 'available' : ''} `}
                    
                    >{i.index}
                    </button>
                    </>
                )
                
            })} */}
        </div>
    )
}