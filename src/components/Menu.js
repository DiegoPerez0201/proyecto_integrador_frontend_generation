import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { findProject, getProjectsByUsername, userProjectDelete } from "../services/UserwebProjectService";

const Menu = ({ relationProject }) => {
    const [userwebProject, setUserwebProject] = useState([]);
    const [userListProject, setUserListProject] = useState([]);

    const obtenerProjectsByUsername = async () => {
        setUserwebProject(await getProjectsByUsername());
        console.log(await getProjectsByUsername());
    }

    const getAllUserByProject = async () => {
        setUserListProject(await findProject());
    }

    const deleteRelationalProject = async (id) => {
        await userProjectDelete(id);
        getAllUserByProject();
    }

    useEffect(() => {
        obtenerProjectsByUsername();
        getAllUserByProject();
    }, [])

    return (
        <div className="menu col-sm-3">
            <div className="mt-2 mb-5 d-flex flex-column align-items-center">
                <button class="btn btn-dark align-self-end mb-4" type="button" aria-label="Mute"> <Link to="/ProjectSetting"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                </svg> </Link> </button>
                <h4 class="mb-3 text-center">Nombre Proyecto</h4>
                <a href="/Analytics"><button type="button" class="btn btn btn-dark">Ver análisis</button></a>
            </div>
            <div className="d-flex flex-column col-m-4 align-items-center">
                <div>
                    {userwebProject.map(userwebProject => (
                        <button type="button" class="text-sm-start btn btn-dark btn-lg m-1">{userwebProject}</button>
                    ))}
                    <button type="button" class="btn btn-primary btn-lg m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">X</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">¿Estás seguro que quieres eliminar el proyecto?</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Si eliminas el proyecto, puedes que crear uno nuevo haciendo click en el botón "+".
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <a href="/DashboardPage">
                                        <button type="button" class="btn btn-primary">Sí, estoy seguro
                                            <div onClick={relationProject.map(deleteRelation => deleteRelationalProject(deleteRelation))}></div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/NewProject"><button type="button" class="text-center btn btn-dark btn-sm m-1">+</button></Link>
                </div>
            </div>
        </div>
    )
}

const MenuAnalytics = () => {
    const [userwebProject, setUserwebProject] = useState([]);

    const obtenerProjectsByUsername = async () => {
        setUserwebProject(await getProjectsByUsername());
        console.log(await getProjectsByUsername());
    }

    useEffect(() => {
        obtenerProjectsByUsername();
    }, [])

    return (
        <div className="menu col-sm-3">
            <div className="mt-2 mb-5 d-flex flex-column align-items-center">
                <button class="btn btn-dark align-self-end mb-4" type="button" aria-label="Mute"> <Link to="/ProjectSetting"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                </svg> </Link> </button>
                <h4 class="mb-3 text-center">Nombre Proyecto</h4>
                <Link to="/DashboardPage"><button type="button" class="btn btn btn-dark">Ver encuesta</button></Link>
            </div>
            <div className="d-flex flex-column col-m-4 align-items-center">
                {userwebProject.map(userwebProject => (
                    <button type="button" class="text-sm-start btn btn-dark btn-lg m-1">{userwebProject}</button>
                ))}
                <Link to="/NewProject"><button type="button" class="text-center btn btn-dark btn-sm m-1">+</button></Link>
            </div>
        </div>
    )
}

export { Menu, MenuAnalytics }