import React from "react";
import data from "../components/img/data.png";
import recomendation from "../components/img/recomendation.jpg";
import team from "../components/img/team.png";
import 'bootstrap/dist/js/bootstrap.js';

const Slide = () => {
    return (
        <div className="container" style={{ marginTop: 40, marginBottom: 40 }}>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner shadow">
                    <div className="carousel-item active">
                        <img src={team} className="d-block w-100" height={720} alt="not loaded" />
                        <div class="carousel-caption d-none d-md-block" style={{ color: 'purple' }}>
                            <h5>Equipos de trabajo</h5>
                            <p><i>Plataforma dedicada al sistema de evaluación de cada sprint sobre clima laboral y equipos de trabajo</i></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={data} className="d-block w-100" height={720} alt="not loaded" />
                        <div class="carousel-caption d-none d-md-block" style={{ color: 'purple' }}>
                            <h5>Estadística</h5>
                            <p><i>Visualización de los resultados a nivel indivual, de equipos de trabajo y empresa</i></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={recomendation} className="d-block w-100" height={720} alt="not loaded" />
                        <div class="carousel-caption d-none d-md-block" style={{ color: 'purple' }}>
                            <h5>Recomendaciones</h5>
                            <p><i>Feedback regular para la mejora empresarial en ámbitos de compromiso, retención y productividad de los empleados</i></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slide;