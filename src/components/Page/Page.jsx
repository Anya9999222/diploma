import './Page.css'

export const Page = ({aside, main}) => {
    return(
<div className='main__container'>
        <aside className='aside'>
            {aside}
        </aside>
        <div className='main__content'>
            {main}
        </div>
    </div>
    )
    
}

export default Page