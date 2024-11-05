export const FormHeader = () => {
    return(
        <div className="form-container">
            <form action="">
                <label htmlFor="from">Направление</label>
                <input type="text" className="from"/>
                <input type="text" className="to"/>
                <label htmlFor="">Дата</label>
                <input type="text" className="departure"/>
                <input type="text" className="arrival"/>
                <button>Найти билеты</button>
            </form>
        </div>
    )
}

export default FormHeader;