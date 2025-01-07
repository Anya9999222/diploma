import { useState } from 'react'
import './SortingBlock.css'

export const SortingBlock = () => {
    const [activeSort, setActiveSort] = useState('времени');
    const [selectState, setSelectState] = useState('hidden');

    const handleClick = () => {
        selectState === 'hidden' ?  setSelectState('visible') :  setSelectState('hidden')
    }


    return(
        <div className='sorting__block'>
            <div className='sorting__total'>
                найдено 20
            </div>
            <div className='sorting__block-item'>
                <div className='sorting__block-section'>
                    сортировать по: 
                    <div className='section__item active' onClick={handleClick}>{activeSort}
                        <div className={`select__items ${selectState}`}>
                            <div className='sel-item'>времени</div>
                            <div className='sel-item'>стоимости</div>
                            <div className='sel-item'>длительности</div>
                        </div>

                    </div>
                </div>
                <div className='sorting__block-section'>
                    показывать по:
                    <div className='number-item'>5</div>
                    <div className='number-item'>10</div>
                    <div className='number-item'>20</div>
                </div>
            </div>
        </div>
    )
}