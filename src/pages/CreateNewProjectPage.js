import React from "react";
import { Banner, CreateProject } from "../components";
import { useEffect, useState } from "react";
import { getUserwebByUsername } from "../services/UserwebService";
import { projectAdd } from "../services/ProjectService";

const CreateNewProjectPage = () => {
    const [project, setProject] = useState([]);
    const [userweb, setUserweb] = useState([]);

    const agregarProject = async(project) => {
        await projectAdd(project);
    }

    const getUserwebId = async() => {
        setUserweb(await getUserwebByUsername());
    }

    useEffect(() => {
        getUserwebId();
    }, [])

    return (
        <div className="flex-body">
        <Banner userweb={userweb}/>
        <div className='row mt-5'>
            <div className='row'>
                <CreateProject agregarProject={agregarProject}/>
            </div>
        </div>
        <div className="empty-space2"></div>
    </div>
    )
}

export default CreateNewProjectPage;