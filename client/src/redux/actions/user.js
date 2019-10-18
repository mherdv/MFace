import axios from 'axios';

export const loginUser = ({ email, password }) => async (dispatch) => {
    await axios.post('/authorization/login', { email, password }).then(res => {
        console.log(res);
    })
} 