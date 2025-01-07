import './MoreInfo.css'
export const MoreInfo = () => {
    return (
        <div className="main__block info" id='info'>
            <div className='wrapper'>
            <div className="main__block-header">
                <h2>Как это работает</h2>
                <button className='info-button'>Узнать больше</button>
            </div>
            <div className="main__block-content">
                <div className="main__block-item">
                    <img src="/src/assets/Group 3.png" alt="" />
                    <div className='item-content'> Удобный заказ <br />на сайте</div>
                </div>
                <div className="main__block-item">
                    <img src="/src/assets/office.png" alt="" />
                    <div className='item-content'> Нет необходимости <br />ехать в офис</div>
                </div>
                <div className="main__block-item">
                    <img src="/src/assets/directions.png" alt="" />
                    <div className='item-content'> Огромный выбор <br />направлений</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default MoreInfo