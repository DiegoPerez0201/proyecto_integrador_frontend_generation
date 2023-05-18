import React from "react";
import CompanyRegister from "../components/CompanyRegister";
import { BannerNoUser } from "../components/Banner";

const CompanyPage = () => {
    return (
        <div>
            <div>
                <BannerNoUser />
            </div>
            <div className="flex-body">
                <CompanyRegister />
                <div className="empty-space2"></div>
            </div>
            
        </div>
    )
}

export default CompanyPage;