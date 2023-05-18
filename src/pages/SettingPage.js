import React from "react";
import { useEffect, useState } from "react";
import { Banner } from "../components";
import { getUserwebByUsername } from "../services/UserwebService";
import Setting from "../components/Setting";
import { userwebEdit } from "../services/UserwebService";


const SettingPage = () => {
    const [userweb, setUserweb] = useState([]);
    const [userwebEdited, setUserwebEdited] = useState(null);
    const   editUserweb = async (userweb) =>{
           await userwebEdit (userweb);
           setUserwebEdited (null);
    }
  

    const getUserwebId = async () => {
        setUserweb(await getUserwebByUsername());
    }

    useEffect(() => {
        getUserwebId();
    }, [])
    return (
        <div className="flex-body">
            <Banner userweb={userweb} />
            <Setting userweb = {userweb}
            editUserweb = {editUserweb}
            userwebEdited = { userwebEdited}
            setUserwebEdited = {setUserwebEdited}/>
            <div className="empty-space"></div>
        </div>

    )
}

export default SettingPage;