import './ThirdClassBlock.css'

export const ThirdClassBlock = (seats) => {
    let seatsAvailable = [];

    seats.seats.map((i)=> {
        i.available ? seatsAvailable.push(i.index) : ''
    })

    const arr = Array.from({ length: 48 }, (_, i) => i + 1);


    const places = arr.map((seat) =>
     
        seatsAvailable?.includes(seat) ? {index: seat, available: true} : {index: seat, available: false}
     
     );


    return(
        <div className="third__class-block">
            <div className="main__block-third-class">
             <div className='third__class-top-seats'>
                {
                    places.map((i) => {
                        if(i.index % 2 === 0 && i.index < 33) return( 
                        <button className={`third__class-btn top ${i.available ? 'available' : ''}`}> {i.index}</button>
                    )
                        
                        
                           
                        
                    })
                }
             </div>
             <div className='third__class-bottom-seats'>
                {
                    places.map((i) => {
                        if(i.index % 2 !== 0 && i.index < 32) return( 
                        <button className={`third__class-btn bottom ${i.available ? 'available' : ''}`}> {i.index}</button>
                    )
                    })
                }
             </div>
             </div>
             <div className="aside__seats-third-class">
             {
                    places.map((i) => {
                        if(i.index > 32) return( 
                        <button className={`third__class-btn-aside-seat ${i.available ? 'available' : ''}`}> {i.index}</button>
                    )
                    })
                }
             </div>
        </div>
    )
}