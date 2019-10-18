import APIRequest from '../../../utils/APIRequest';


export const loginUser = ({ email, password }) => async (dispatch) => {

    const reqParams = {
        path: 'http://localhost:8080/api/authorization/login',
        method: 'post',
        body: { email, password },
        headers: {
            'content-type': "application/json"
        },
        callback: res => {
            console.log(res);
        }
    }
    const response = await APIRequest(reqParams);

    //todo handle response if status 1 dispatch adding user else dispatch showing error

} 