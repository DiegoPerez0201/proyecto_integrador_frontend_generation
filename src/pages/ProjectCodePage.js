import React from "react";
import { Banner, ProjectCode } from "../components";
import { useEffect, useState } from "react";
import { getUserwebByUsername } from "../services/UserwebService";

const ProjectCodePage = () => {

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
                <ProjectCode/>
            </div>
        </div>
        <div className="empty-space2"></div>
    </div>
    )
}

export default ProjectCodePage;