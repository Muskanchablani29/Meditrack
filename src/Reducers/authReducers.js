const SIGNUP = 'SIGNUP';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Load user data from localStorage if available
const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: savedUser || null, // Load stored user or set to null
    isLoggedIn: savedUser ? true : false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            localStorage.setItem("user", JSON.stringify(action.payload)); // Store user in localStorage
            return { ...state, user: action.payload };

        case LOGIN:
            localStorage.setItem("user", JSON.stringify(state.user)); // Save user data on login
            return { ...state, isLoggedIn: true };

        case LOGOUT:
            localStorage.removeItem("user"); // Remove user from localStorage on logout
            return { ...state, user: null, isLoggedIn: false };

        default:
            return state;
    }
};

export default authReducer;

// Actions
export const signup = (user) => ({ type: SIGNUP, payload: user });
export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });
