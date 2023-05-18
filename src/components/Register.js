import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const userwebDefault = {
    "userweb_id": 0,
    "user_name": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "user_password": "",
    "company_position": "",
    "company_id": 0
}

const Register = ({ agregarUserweb, company }) => {
    const [userweb, setUserweb] = useState(userwebDefault);
    //Agregar company_position, company_id AQUI ABAJO!!!!!!!!!!!!!
    const { userweb_id, user_name, first_name, last_name, email, user_password, company_position, company_id } = userweb;
    const handleInputChange = (user) => {
        const handleInputChange = {
            ...userweb,
            [user.target.name]: user.target.value,
        }
        setUserweb(handleInputChange);
    }

    return (
        <div className="login p-5 col-6 m-3 text-center d-flex flex-column align-items-center shadow mx-auto">
            <div></div>
            <h5 class="text-center mb-4">¡Regístrate!</h5>
            <form class="form-card" onsubmit="event.preventDefault()">
                <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-label px-3"></label> <input type="text" class="form-control" id="user_name" name="user_name" placeholder="Nombre de usuario" value={user_name} onChange={handleInputChange}></input></div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-label px-3"></label> <input type="email" class="form-control" id="email" name="email" value={email} onChange={handleInputChange} placeholder="Correo"></input> </div>

                </div>
                <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-label px-3"></label> <input type="text" class="form-control" id="first_name" name="first_name" value={first_name} onChange={handleInputChange} placeholder="Nombre"></input> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-label px-3"></label> <input type="password" class="form-control" id="user_password" name="user_password" value={user_password} onChange={handleInputChange} placeholder="Contraseña"></input> </div>
                </div>
                <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-label px-3"></label> <input type="text" class="form-control" id="last_name" name="last_name" value={last_name} onChange={handleInputChange} placeholder="Apellido"></input></div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-label px-3"></label> <input type="password" class="form-control" id="repeat_password" name="repeat_password" placeholder="Repetir Contraseña"></input> </div>
                </div>
                <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"><label class="form-label px-3"></label>
                        <select class="form-select" aria-label="Default select example" id="company_id" name="company_id" value={company_id} onChange={handleInputChange}>
                            <option selected>Empresa</option>
                            {company.map(company => (
                                <option value={company.company_id}>{company.company_name}</option>
                            ))}
                        </select>
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex"><label class="form-label px-3"></label>
                        <select class="form-select" aria-label="Default select example" id="company_position" name="company_position" value={company_position} onChange={handleInputChange}>
                            <option selected>Cargo</option>
                            <option value="Product Owner">Product Owner</option>
                            <option value="Scrum Master">Scrum Master</option>
                            <option value="Developer">Developer</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <Link to="/DashboardPage"><button class="btn btn-primary row justify-content-end mt-4" type="submit" onClick={() => agregarUserweb(userweb)}>Entrar</button></Link>
                <div className="text-center m-3">
                    <h6>¿Ya tienes una cuenta? <Link to="/Login">Inicia sesión</Link> </h6>
                </div>
            </form>
        </div>
    )
}

export { Register };