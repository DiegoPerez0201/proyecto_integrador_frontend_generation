import React from "react";
import { Link } from "react-router-dom";

const CompanyRegister = () => {
    return (
        <div>
            <div className="Company p-5 col-6 m-3 text-center d-flex flex-column align-items-center shadow mx-auto">
                <h1>Registra tu empresa</h1>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label"><b>Nombre de la empresa</b></label>
                    <input type="text" class="form-control" id="formGroupExampleInput"></input>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label"><b>Rut de la empresa</b></label>
                    <input type="text" class="form-control" id="formGroupExampleInput2"></input>
                </div>
                <div className="text-center m-3">
                    <button type="button" class="btn btn-warning"><Link to="/">Aceptar</Link></button>
                    <button type="button" class="btn btn-danger ms-2"> <Link to="/">Cancelar</Link></button>
                </div>
            </div>
        </div>
    )
}

export default CompanyRegister;