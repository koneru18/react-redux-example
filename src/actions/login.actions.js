import constants from '../constants';

const email = "admin@gmail.com";
const pwd = "admin";
const user = {
    firstname: 'Prasad',
    lastname: 'koneru',
    sessionId: '123-456-7890'
}
const error = {
    status: 401,
    message: "Invalid Credentials"
}

export const loginActions = {
    login(username, password) {
        return dispatch => {
            dispatch(request());
            // Api call comes here
            if (username === email && password === pwd) {
                dispatch(success(user));
                // history.push('/');
            } else {
                dispatch(failure(error));
            }
        };
        function request() { return { type: constants.LOGIN_REQUEST } }
        function success(user) { return { type: constants.LOGIN_SUCCESS, user } }
        function failure(error) { return { type: constants.LOGIN_FAILURE, error } }
        
    }
}
