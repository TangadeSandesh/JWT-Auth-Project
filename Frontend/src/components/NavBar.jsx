// import React from 'react'

const NavBar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><span className='badge bg-light text-dark fs-5'>News Katta</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg">
                <li className="nav-item">
                  <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={()=>setCategory("business")}>Bussieness</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</a>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
              <span className="mx-5">
                <button className="btn btn-outline-warning mx-2" type="submit">Login</button>
                <button className="btn btn-outline-danger" type="submit">SignUp</button>
              </span>
        </div>
    </nav>
    
  )
};

export default NavBar
