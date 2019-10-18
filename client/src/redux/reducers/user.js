import jwt_decode from 'jwt-decode';

// just for demo 
// localStorage.setItem('userToken', "Bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6Im1oZXJkdkBnbWFpbC5jb20iLCJpYXQiOjE1MTYyMzkwMjJ9.gkV5LDdWnCvJBVTsFS6LIW5moXLwuDDc21oJdaRvb9Y")

const userToken = localStorage.getItem('userToken');

const initialState = {

    userId: '',
    email: '',
    name: '',
    token: userToken,
}

// localStorage.removeItem('userToken');

if (userToken) {

    const encodedJwt = jwt_decode(userToken);
    initialState.userId = encodedJwt.userId
    initialState.email = encodedJwt.email
    initialState.name = encodedJwt.name
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'some type':
            return state;
        default:
            return state;
    }
}