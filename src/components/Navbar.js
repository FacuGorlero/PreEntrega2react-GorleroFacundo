import React from 'react'
import { Link } from 'react-router-dom'
import { Cartwidget } from './Cartwidget'

const Navbar = () => {
  return(
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="logo navbar-brand" to="ItemListContainer">Dreamer</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="menu navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="menu-link nav-link active" aria-current="page" to="/productos">Todos los productos</Link>
        </li>
        <li className="nav-item">
          <Link className="menu-link nav-link" to="/productos/Remeras">Remeras</Link>
        </li>
        <li className="nav-item">
          <Link className="menu-link nav-link" to="/productos/Pantalones">Pantalones</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <Cartwidget/>
      </form>
    </div>
  </div>
</nav>
</>
    
)
}

export default Navbar