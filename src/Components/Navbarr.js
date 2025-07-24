import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from 'react-stars';

function Navbarr({settext, setscore}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark px-4" style={{ backgroundColor: '#121212' }}>
            <a className="navbar-brand" href="#">
                <img src="/logo.png" alt="CineMood Logo" height="51" width="100" className="d-inline-block align-text-top" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link fw-semibold active" href="#" style={{ color: '#f5eeefff' }}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold active" href="#" style={{ color: '#f5eeefff' }}>News 🔥</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold active" href="#" style={{ color: '#f5eeefff' }}>Series</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold active" href="#" style={{ color: '#f5eeefff' }}>Movies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold active" href="#" style={{ color: '#f5eeefff' }}>WatchList</a>
                    </li>
                </ul>

                <ReactStars
                    count={5}
                    size={24}
                    color2="#E50914" 
                    onChange={(newRating)=>setscore(newRating)}
                />

                <form className="d-flex" role="search">
                    <input
                    className="form-control me-2 bg-dark text-white"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{
                        border: 'none',
                        borderRadius: '10px',
                        boxShadow: '0 0 5px 1px rgba(229, 9, 20, 0.7)',
                        transition: 'box-shadow 0.3s ease',
                        marginLeft:'20px'
                    }}
                    onChange={(e)=> settext(e.target.value)}
                    onFocus={e => e.target.style.boxShadow = '0 0 8px 2px rgba(229, 9, 20, 0.7)'} // shadow rouge un peu plus fort au focus
                    onBlur={e => e.target.style.boxShadow = '0 0 5px 1px rgba(229, 9, 20, 0.7)'} 
                    />

                    <button className="btn btn-outline-danger" type="submit" style={{borderRadius:'10px'}}>Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbarr;