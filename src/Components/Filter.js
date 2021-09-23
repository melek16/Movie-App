import StarRating from './StarRating'

const Filter = ({search,handleChange,rating,handleRating,hover,handleHover}) => {
    

    return (
        <div id="filter">
            <form>
                <input id="Search" type="text" placeholder="Search..." value={search} onChange={handleChange}/>
                <button id="srch_btn">
                <img  alt="" src='search.svg' />
                </button>
            </form>
            <StarRating editable={true} handleRating={handleRating} rating={rating} hover={hover} handleHover={handleHover}/>
        </div>
    )
}

export default Filter
