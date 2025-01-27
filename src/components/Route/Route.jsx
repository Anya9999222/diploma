import { sToStr } from '../../hooks';
import './Route.css';

export const Route = ({info, time, direction}) => {
    const timeFrom = new Date(info.from.datetime * 1000).toISOString().substring(11, 16);
    const timeTo = new Date(info.to.datetime * 1000).toISOString().substring(11,16);
    const duration= sToStr(info.duration);
    console.log(duration)
    return(
        <div className='route'>
            {   direction === 'to' ? 
                    <div className='direct-from'>
                        <div className='route-time'>{timeFrom}</div>
                        <div className='city'>{info.from.city.name}</div>
                        <div className='station'>{info.from.railway_station_name}</div>
                    </div> : 
                    <div className='direct-to'>
                    <div className='route-time'>{timeTo}</div>
                        <div className='city'>{info.to.city.name}</div>
                        <div className='station'>{info.to.railway_station_name}</div>
                    </div>
                }
                    
                    <div className='direct__arrow'>
                        <div className='direct__time'>{ time ? `${duration.hours}:${duration.mins}`  : ''}</div>
                        <div className={`direct__arrow ${direction}`}></div>
                    </div>

                    {
                        direction === 'to' ? <div className='direct-to'>
                        <div className='route-time'>{timeTo}</div>
                            <div className='city'>{info.to.city.name}</div>
                            <div className='station'>{info.to.railway_station_name}</div>
                        </div> : <div className='direct-from'>
                        <div className='route-time'>{timeFrom}</div>
                        <div className='city'>{info.from.city.name}</div>
                        <div className='station'>{info.from.railway_station_name}</div>
                    </div>
                    }
                    
        </div>    
    )
}