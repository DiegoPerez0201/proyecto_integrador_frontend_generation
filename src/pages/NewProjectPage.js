import React from "react";
import { Banner } from "../components";
import ProjectsButtons from "../components/ProjectsButtons";
import { useEffect, useState } from "react";
import { getUserwebByUsername } from "../services/UserwebService";

const NewProjectPage = () => {

    const [userweb, setUserweb] = useState([]);

    const getUserwebId = async() => {
        setUserweb(await getUserwebByUsername());
    }

    useEffect(() => {
        //instrucciones
        getUserwebId();
    }, [])

    return (
        <div className="flex-body">
        <Banner userweb={userweb}/>
        <div className='row mt-5'>
            <div className='row'>
                <ProjectsButtons/>
            </div>
        </div>
        <div className="empty-space2"></div>
    </div>
    )
}

export default NewProjectPage;