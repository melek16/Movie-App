import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { handleHover, handleRating, handleSearchSubmit } from '../reducers/counterSlice'
import { handleChange } from '../reducers/counterSlice'
import StarRating from './StarRating'

const Filter = () => {
    let hover=useSelector(state=>state.reducer.hover)
    const rating = useSelector(state => state.reducer.rating)
    let search=useSelector(state=>state.reducer.search)
    let dispatch=useDispatch()
    return (
        <div id="filter" onSubmit={e=>{e.preventDefault();dispatch(handleSearchSubmit())}}>
            <form>
                <input id="Search" type="text" placeholder="Search..." value={search} onChange={e=>dispatch(handleChange(e.target.value))}/>
                <button id="srch_btn" type="submit">
                <img  alt="" src='search.svg' />
                </button>
            </form>
            <StarRating reload={true} hover={hover} rating={rating} handleRating={(i)=>dispatch(handleRating(i))} handleHover={i=>dispatch(handleHover(i))}/>
        </div>
    )
}

export default Filter
