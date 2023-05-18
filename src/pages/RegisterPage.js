import React, { useEffect, useState } from "react";
import { BannerNoUser, Register } from "../components";
import { userwebAdd } from "../services/UserwebService";
import { companyGetAll } from "../services/CompanyService";


const RegisterPage = () => {
    const [userweb, setUserweb] = useState([]);
    const [company, setCompany] = useState([]);

    const agregarUserweb = async(userweb) => {
        await userwebAdd(userweb);
    }
    const getAllCompanys = async() => {
        setCompany(await companyGetAll());
    }
    useEffect(()=>{
        getAllCompanys();
    },[])

    return (
        <div className="flex-body">
        <BannerNoUser/>
        <Register agregarUserweb={agregarUserweb} company={company}/>
        <div className="empty-space2"></div>
        </div>
    )
}

export default RegisterPage;