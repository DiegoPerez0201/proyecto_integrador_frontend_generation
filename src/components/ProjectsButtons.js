import React from "react";
import { Link } from "react-router-dom";

const ProjectsButtons = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <button type="button" class="text-sm-start btn btn-dark m-1 col-3">
            <Link to="/CreateNewProject">
                <h2>Crear un nuevo proyecto</h2>
                <p>Crea un nuevo proyecto e invita a tus compañeros</p>
                </Link>
            </button>
            <button type="button" class="text-sm-start btn btn-dark m-1 col-3">
            <Link to="/EnterProjectCode">
                <h2>Ingresar a proyecto existente</h2>
                <p>¿Ya tienes una invitación? ¡Ingresa el código acá!</p>
                </Link>
            </button>
        </div>
    )
}

export default ProjectsButtons;