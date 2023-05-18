import axios from "axios";

const baseURL = 'http://localhost:8080/userwebproject';

const getProjectsByUsername = async (user) => {
    user = 'mary111'
    const rest = await axios.get(baseURL + "/projectsByUserweb/" + user);
    console.log(rest);
    return rest.data;
}

const getUserByProject = async () => {
    const rest = await axios.get(baseURL + '/userwebByProjects/2');
    console.log(rest);
    return rest.data;
}

const userProjectDelete = async (id) => {
    const rest = await axios.delete(baseURL + '/delete/' + id);
    console.log(rest);
    return rest.data;
}

const findProject = async (project_name) => {
    project_name = 'Proyecto B'
    const rest = await axios.get(baseURL + '/findProject/' + project_name);
    console.log(rest);
    return rest.data;
}

export { getProjectsByUsername, getUserByProject, userProjectDelete, findProject }