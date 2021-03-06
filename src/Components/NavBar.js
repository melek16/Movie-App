import { Link } from "react-router-dom"


const NavBar = ({mode,handleToggle}) => {
    return (
        
        <div className="NavBar">
            <Link to='/'>
            <div id="logo">
            <svg  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#5CADA9" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
            <h2>Movie App</h2>
            </div> 
               </Link>  
               <label className="switch" onChange={handleToggle}>
               <input type="checkbox"/>
                <span className="slider round"></span>
                 </label>
        </div>
     
    )
}

export default NavBar
