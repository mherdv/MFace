const initialState = {
    userId: '',
    email: '',
    name: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'some type':
            return state;
        default:
            return state;
    }
}