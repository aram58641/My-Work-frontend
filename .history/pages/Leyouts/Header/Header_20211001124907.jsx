import style from './Header.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'


export default function Header(){
    return(
        <>
          <nav classnAME="navbar navbar-expand-lg navbar-light bg-light">
  <div classnAME="container-fluid">
    <a classnAME="navbar-brand" href="#">Navbar</a>
    <button classnAME="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classnAME="navbar-toggler-icon"></span>
    </button>
    <div classnAME="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classnAME="navbar-nav me-auto mb-2 mb-lg-0">
        <li classnAME="nav-item">
          <a classnAME="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classnAME="nav-item">
          <a classnAME="nav-link" href="#">Link</a>
        </li>
        <li classnAME="nav-item dropdown">
          <a classnAME="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul classnAME="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a classnAME="dropdown-item" href="#">Action</a></li>
            <li><a classnAME="dropdown-item" href="#">Another action</a></li>
            <li><hr classnAME="dropdown-divider"></li>
            <li><a classnAME="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li classnAME="nav-item">
          <a classnAME="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form classnAME="d-flex">
        <input classnAME="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button classnAME="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}