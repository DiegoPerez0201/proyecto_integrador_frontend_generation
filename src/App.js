import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalyticsPage from "./pages/AnalyticsPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import SettingPage from "./pages/SettingPage";
import ProjectSettingPage from "./pages/ProjectSettingPage";
import NewProjectPage from "./pages/NewProjectPage";
import CreateNewProjectPage from "./pages/CreateNewProjectPage";
import ProjectCodePage from "./pages/ProjectCodePage"
import EnterProjectCodePage from "./pages/EnterProjectCodePage";
import CompanyPage from "./pages/CompanyPage";


const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/Analytics' element={<AnalyticsPage/>}></Route>
            <Route path='/NewProject' element={<NewProjectPage/>}></Route>
            <Route path='/Login' element={<LoginPage/>}></Route>
            <Route path='/Register' element={<RegisterPage/>}></Route>
            <Route path='/DashboardPage' element={<DashboardPage/>}></Route>
            <Route path='/Setting' element={<SettingPage/>}></Route>
            <Route path='/ProjectSetting' element={<ProjectSettingPage/>}></Route>
            <Route path='/CreateNewProject' element={<CreateNewProjectPage/>}></Route>
            <Route path='/CodeProject' element={<ProjectCodePage/>}></Route>
            <Route path='/EnterProjectCode' element={<EnterProjectCodePage/>}></Route>
            <Route path='/CompanyRegister' element={<CompanyPage/>}></Route>
            
        </Routes>
        </BrowserRouter>
    )
};

export default App;