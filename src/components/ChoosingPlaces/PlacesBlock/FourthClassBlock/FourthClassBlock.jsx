import './FourthClassBlock.css'
export const FourthClassBlock = (seats) => {
    let seatsAvailable = [];

    seats.seats.map((i)=> {
        i.available ? seatsAvailable.push(i.index) : ''
    })

    const arr = Array.from({ length: 62 }, (_, i) => i + 1);


    const places = arr.map((seat) =>
     
        seatsAvailable?.includes(seat) ? {index: seat, available: true} : {index: seat, available: false}
     
     );


    return(
        <div className="fourth__class-block">
            <div className="right__block-fourth-class">
             <div className='fourth__class-top-seats'>
                {
                    places.map((i) => {
                        if(i.index % 2 === 0 && i.index < 33) return( 
                        <button className={`fourth__class-btn top ${i.available ? 'available' : ''}`}> {i.index}</button>
                    )
                        
                        
                           
                        
                    })
                }
             </div>
             <div className='fourth__class-bottom-seats'>
                {
                    places.map((i) => {
                        if(i.index % 2 !== 0 && i.index < 32) return( 
                        <button className={`fourth__class-btn bottom ${i.available ? 'available' : ''}`}> {i.index}</button>
                    )
                    })
                }
             </div>
             </div>
             <div className="left__block-fourth-class">
             <div className='first__row'>
                    {places.map((i) => {
                        if(i.index === 33){
                            return (
                                <button className={`fourth__class-btn bottom ${i.available ? 'available' : ''}`}> {i.index}</button>
                            )
                        }
                    })}
                </div>
                <div className='main__part-left-block'>
                <div className='fourth__class-top-seats'>
                
                {
                    places.map((i) => {
                        if(i.index % 2 === 0 && i.index > 33 && i.index < 62) return( 
                        <button className={`fourth__class-btn top ${i.available ? 'available' : ''}`}> {i.index}</button>
                    )
                        
                        
                           
                        
                    })
                }
             </div>
             <div className='fourth__class-bottom-seats'>
                {
                    places.map((i) => {
                        if(i.index % 2 !== 0 && i.index > 33) return( 
                        <button className={`fourth__class-btn left-block bottom ${i.available ? 'available' : ''}`}> {i.index}</button>
                    )
                    })
                }
             </div>
                </div>
            <div className='last__row'>
            {
                    places.map((i) => {
                        if(i.index === 62) return( 
                        <button className={`fourth__class-btn left-block bottom ${i.available ? 'available' : ''}`}> {i.index}</button>
                    )
                    })
                }
            </div>
             </div>
        </div>
    )
}