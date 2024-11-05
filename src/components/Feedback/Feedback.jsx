import './Feedback.css'

export const Feedback = () => {
    return(
        <div className="main__block feedback">
            <h2>Отзывы</h2>
            <div className="feedback-content">
            <div className="feedback-item">
                <img src="../../src/assets/feedback1.png" alt="" />
                <div className="feedback-info">
                    <h3>Екатерина Вальнова</h3>
                    <div>
                        Доброжелательные подсказки
                        на всех этапах помогут правильно заполнить поля и без 
                        затруднений купить авиа или ж/д билет, даже если вы заказываете 
                        онлайн билет впервые.
                    </div>
                </div>
            </div>
            <div className="feedback-item">
                <img src="../../src/assets/feedback2.png" alt="" />
                <div className="feedback-info">
                    <h3>Евгений Стрыкало</h3>
                    <div>
                        СМС-сопровождение до посадки
                        Сразу после оплаты ж/д билетов 
                        и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
                    </div>
                </div>
            </div>
            </div>
            
                <img src="../../src/assets/dots.png" className="feedback-img"alt="" />
        </div>
    )
}

export default Feedback