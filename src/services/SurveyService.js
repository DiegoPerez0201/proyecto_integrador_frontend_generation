import axios from "axios";

const baseURL = 'http://localhost:8080/survey';

const surveyAdd = async(survey) => {
    const rest = await axios.post(baseURL + '/save', survey);
    return rest.data;
}
export {surveyAdd}