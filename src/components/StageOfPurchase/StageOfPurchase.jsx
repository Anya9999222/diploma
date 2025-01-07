import './StageOfPurchase.css'
import { useCallback } from 'react';

export const StageOfPurchase = ({stage}) => {

    const titles = ['Билеты', 'Пассажиры', 'Оплата', 'Проверка'];

    const itemClasses = useCallback(
        (value) => {
          return value < stage
            ? 'progress__item progress__item_active'
            : 'progress__item progress__item_disabled';
        },
        [stage]
      );
    return(
        <div className="purchase__stage">
            {titles.map((item, index) => {
        return (
          <div key={index} className={itemClasses(index)}>
            <div className="stage">
              <p className="stage__number">
                <span>{index + 1}</span>
              </p>
              <p className="stage__name">{item}</p>
            </div>
          </div>
        );
      })}
        </div>
    )
}