import axios from "axios";

const baseURL = 'http://localhost:8080/userweb';

const getUserwebByUsername = async() => {
    const rest = await axios.get(baseURL+'/getById/mary111');
    console.log(rest);
    return rest.data;
}

const userwebGetAll = async () => {
    const rest = await axios.get(baseURL+"/findAll");
    return rest.data;
}

const userwebAdd = async (userweb)  => {
    const rest = await axios.post(baseURL+'/save', userweb);
    console.log(rest);
    return rest.data;
}

const userwebEdit = async (userweb) => {
    const rest = await  axios.put(baseURL+'/update',userweb);
    console.log(rest);
    return rest.data;
}


const userwebDelete = async (id) => {
    const rest = await  axios.delete(baseURL+'/delete/'+ id);
    console.log(rest);
    return rest.data;
    
}




export { getUserwebByUsername, userwebAdd, userwebEdit, userwebDelete, userwebGetAll }