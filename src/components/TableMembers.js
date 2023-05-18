import React from "react";
import { useEffect, useState } from "react";
import { userwebGetAll } from "../services/UserwebService";
import { userProjectDelete } from "../services/UserwebProjectService";

const TableMembers = ({ userProject }) => {
    const [userList, setUserList] = useState([]);

    const getAll = async () => {
        await userwebGetAll();
        setUserList(await userwebGetAll());
    }

    const deleteUserProject = async (id) => {
        await userProjectDelete(id);
        getAll();
    }

    useEffect(() => {
        getAll();
    }, [])

    return (
        <div className='col-8 col-3 m-3 text-center d-flex flex-column align-items-center mx-auto'>
            <h2>Lista de miembros del proyecto</h2>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre de usuario</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {userProject.map(userProject => (
                        <tr>
                            <td scope="row">{userProject}</td>
                            <td>{userList.map(user => user.userweb_id == userProject ? (<p>{user.user_name}</p>) : (<></>))}</td>
                            <td>{userList.map(user => user.userweb_id == userProject ? (<p>{user.first_name}</p>) : (<></>))}</td>
                            <td>{userList.map(user => user.userweb_id == userProject ? (<p>{user.last_name}</p>) : (<></>))}</td>
                            <td>{userList.map(user => user.userweb_id == userProject ? (<p>{user.email}</p>) : (<></>))}</td>
                            <td>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Eliminar</button>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">¿Estás seguro de eliminar a un miembro del proyecto?</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Si eliminas al miembro del proyecto, tendrá que volver a unirse mediante el código autogenerado</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                <a href="/ProjectSetting">
                                                    <button type="button" class="btn btn-primary" onClick={() => deleteUserProject(userProject)}>Sí, estoy seguro</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableMembers;