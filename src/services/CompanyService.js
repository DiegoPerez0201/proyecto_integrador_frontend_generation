import axios from "axios";

const baseURL = 'http://localhost:8080/company';

const companyGetAll = async(company) => {
    const rest = await axios.get(baseURL + '/findAll');
    return rest.data;
}

const companyAdd = async (company)  => {
    const rest =  await axios.post(baseURL+"/save", company);
     console.log(rest);
     return rest.data;
}

const companyDelete = async (id) => {
    const rest = await  axios.delete(baseURL+'/delete/'+ id);
    console.log(rest);
    return rest.data;
    
}

export {companyGetAll,companyAdd,companyDelete}