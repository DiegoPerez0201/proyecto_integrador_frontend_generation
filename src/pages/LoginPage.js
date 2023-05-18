import React, {useState, useEffect}from "react";
import { BannerNoUser } from "../components";
import Login from "../components/Login";
import { getUserwebByUsername } from "../services/UserwebService";


const LoginPage = () => {
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
            <BannerNoUser />
            <Login userweb = {userweb} />
            <div className="empty-space2">
            </div>
        </div>
    )
}

export default LoginPage;