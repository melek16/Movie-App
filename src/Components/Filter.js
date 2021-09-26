import StarRating from './StarRating'

const Filter = ({search,handleChange,rating,handleRating,hover,handleHover,handleSubmit}) => {
    

    return (
        <div id="filter" onSubmit={handleSubmit}>
            <form>
                <input id="Search" type="text" placeholder="Search..." value={search} onChange={handleChange}/>
                <button id="srch_btn" type="submit">
                <img  alt="" src='search.svg' />
                </button>
            </form>
            <StarRating reload={true} handleRating={handleRating} rating={rating} hover={hover} handleHover={handleHover}/>
        </div>
    )
}

export default Filter
