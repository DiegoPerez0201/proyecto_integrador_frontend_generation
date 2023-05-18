import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectCodeEnter = () => {
    return (
        <div className="card m-auto col-6 p-4">
            <h2 className="mb-4">Ingrese el código del proyecto:</h2>
            <input type="text" max={7} className="form-control form-control-lg text-center" placeholder="Ingrese aquí el código de 7 dígitos"></input>
            <button type="submit" className="btn btn-primary mt-4"><Link to="/DashboardPage">Ir al dashboard</Link></button>
        </div>
    )
}

const projectDefault = {
    "project_id": 0,
    "project_name": "",
    "admin_name": ""
}

const CreateProject = ({ agregarProject }) => {

    function codeGenerate() {
        const code = (Math.floor(1000000 + Math.random() * 9000000));
        return code;
    }

    const [project, setProject] = useState(projectDefault);
    const { project_id, project_name, admin_name, project_code } = project;
    const handleInputChange = (p) => {
        const handleInputChange = {
            ...project,
            [p.target.name]: p.target.value,
            "project_code": codeGenerate()
        }
        setProject(handleInputChange);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="card m-auto col-6 p-4">
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">¡Atención!</h1>
                        </div>
                        <div class="modal-body">
                        Tu proyecto "{project.project_name}" tiene código: {project.project_code}.
                        <br/>Recuerda que con este código único podrás invitar a tu equipo.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary"><a href="/DashboardPage">Ir al Dashboard</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="mb-4">Nombre del proyecto</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" max={30} className="form-control form-control-lg text-center" placeholder="Ingrese aquí el nombre del proyecto" id="project_name" name="project_name" value={project_name} onChange={handleInputChange}></input>
                {/* project.project_name!=="" ? (<div className="text-center"> <h1>Tu código: {codeGenerate()}</h1> <Link to="/DashboardPage">Siguiente</Link></div>):(<></>)*/}
                <div className="d-flex align-items-center justify-content-center">
                    <button type="submit" className="btn btn-primary mt-4" onClick={() => agregarProject(project)} data-bs-toggle="modal" data-bs-target="#exampleModal">Obtener código</button>
                    
                </div>
            </form>
        </div>
    )
}

const ProjectCode = (project) => {
    return (
        <div className="card m-auto col-6 p-4">
            <h2 className="mb-4">El código de tu proyecto es:</h2>
            <input type="text" max={30} className="form-control form-control-lg text-center" value={project.project_id} disabled="true"></input>
            <button type="submit" className="btn btn-primary mt-4"><Link to="/DashboardPage">Ir al dashboard</Link></button>
        </div>
    )
}

export { ProjectCode, CreateProject, ProjectCodeEnter };
