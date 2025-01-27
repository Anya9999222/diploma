export function headerFormValidate (state) {
    console.log(state)
    const errors = {}
    

    if(state.from.date > state.to.date && !state.to.date === ''){
        errors.dateError = 'Дата отправления не может быть позже даты прибытия'
    } else if(state.from.city === ''){
        errors.cityFrom = 'Введите город отправления'
    }else if(state.to.city === ''){
        errors.cityTo = 'Введите город прибытия'
    } else if(state.from.date === ''){
        errors.dateEnterError = 'Введите дату!'
    }

    if(Object.keys(errors).length){
        return errors
    }

    return true
}