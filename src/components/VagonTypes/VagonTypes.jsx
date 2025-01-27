import { VagonType } from './VagonType/VagonType';
import './VagonTypes.css';


export const VagonTypes = ({info, onClick, activeId}) => {
    console.log(info)
    return(
      <>
            {
                info.have_fourth_class ? <VagonType
                    type={'sitting'}
                    name={'Сидячий'}
                    id={'fourth'}
                    onClick={onClick}
                    active={activeId === 'fourth' ? true : false}
                /> : ''
            }
            {
                info.have_third_class ? <VagonType
                    type={'reserved'}
                    name={'Плацкарт'}
                    id={'third'}
                    onClick={onClick}
                    active={activeId === 'third' ? true : false}
                /> : ''
            }
            {
                info.have_second_class ? <VagonType
                    type={'compartment'}
                    name={'Купе'}
                    id={'second'}
                    onClick={onClick}
                    active={activeId === 'second' ? true : false}
                /> : ''
            }
            {
                info.have_first_class ? <VagonType
                    type={'lux'}
                    name={'Люкс'}
                    id={'first'}
                    onClick={onClick}
                    active={activeId === 'first' ? true : false}
                /> : ''
            }
      </>
    )
}