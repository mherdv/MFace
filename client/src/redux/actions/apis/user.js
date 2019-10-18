import APIRequest from '../../../utils/APIRequest';


export const loginUser = ({ email, password }) => async (dispatch) => {


    const reqParams = {
        path: 'http://localhost:8080/authorization/login',
        method: 'post',
        body: { email, password },
        headers: {
            'content-type': "application/json"
        },
        callback: res => {
            console.log(res);
        }
    }
    await APIRequest(reqParams)

} 