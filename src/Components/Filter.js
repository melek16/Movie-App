import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { handleChange, handleHover, handleRating, handleSearchSubmit } from '../actions/actions'
import StarRating from './StarRating'

const Filter = () => {
    let hover=useSelector(state=>state.hover)
    const rating = useSelector(state => state.rating)
    let search=useSelector(state=>state.search)
    let dispatch=useDispatch()
    return (
        <div id="filter" onSubmit={e=>{e.preventDefault();dispatch(handleSearchSubmit())}}>
            <form>
                <input id="Search" type="text" placeholder="Search..." value={search} onChange={e=>dispatch(handleChange(e))}/>
                <button id="srch_btn" type="submit">
                <img  alt="" src='search.svg' />
                </button>
            </form>
            <StarRating reload={true} hover={hover} rating={rating} handleRating={(i)=>dispatch(handleRating(i))} handleHover={i=>dispatch(handleHover(i))}/>
        </div>
    )
}

export default Filter
