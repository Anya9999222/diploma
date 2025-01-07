import './Route.css';

export const Route = ({time, direction}) => {
    return(
        <div className='route'>
                    <div className='direct-from'>
                        <div className='route-time'>00:10</div>
                        <div className='city'>Moscow</div>
                        <div className='station'>Kurskii</div>
                    </div>
                    <div className='direct__arrow'>
                        <div className='direct__time'>{time}</div>
                        <div className={`direct__arrow ${direction}`}></div>
                    </div>
                    
                    <div className='direct-to'>
                    <div className='route-time'>00:10</div>
                        <div className='city'>Moscow</div>
                        <div className='station'>Kurskii</div>
                    </div>
                </div>
    )
}