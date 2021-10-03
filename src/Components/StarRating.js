const StarRating = (props) => {
  return (
    <div className="star-rating">
      {[...Array(10)].map((star, index) => {
        index += 1;
        return (
            <button
            key={index}
            type="button"
            className={index <= (props.hover || props.rating*2) ? "on" : "off"}
            onClick={()=>props.handleRating(index)}
            onMouseEnter={() => props.handleHover(index)}
            onMouseLeave={() => props.handleHover(props.rating)}
            style={index % 2===0 ?{transform: 'scaleX(-1)'}:{transform: 'scaleX(1)'}}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      {props.reload && <span id="reload" onClick={()=>{props.handleRating(0);props.handleHover(0);}}>&#x21bb;</span>}
    </div>
  );
}

StarRating.defaultProps={
  handleRating:()=>{},
  handleHover:()=>{}
}

export default StarRating
