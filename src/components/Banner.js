import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ userweb }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <h1 className="ms-4">SCROOM</h1>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {userweb.first_name + " " + userweb.last_name}
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/Setting">Ajustes</a></li>
                                <li><a class="dropdown-item" href="/">Cerrar sesión</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const BannerNoUser = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <h1 className="ms-4">SCROOM</h1>
            </nav>
        </header>
    )
}

const BannerHomePage = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <h1 className="ms-4">SCROOM</h1>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link to="/CompanyRegister"><button class="btn btn-secondary me-3" type="button">Registra tu empresa</button></Link>
                        <Link to="/Login"><button class="btn btn-secondary me-3" type="button">Inicia sesión</button></Link>
                        <Link to="/Register"><button class="btn btn-secondary" type="button">Regístrate</button></Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export { Banner, BannerNoUser, BannerHomePage };