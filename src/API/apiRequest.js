import {
    authStart,
    authSuccess,
    authError
} from '../redux/features/userSlice'
import {Navigate} from 'react-router-dom';
import {Util} from '../helpers/util';
import { publicRequest } from '../helpers/requestMethod';

let util = new Util()


/* USER REGISTRATION: api request */
export const register = async (info, dispatch) => {
    try {
        dispatch(authStart())

        const {data} = await publicRequest.post(`/users/`, info)
        dispatch(authSuccess())
        util.Alert("success", data)
    } catch (error) {
        let err = error.response?.data;
        dispatch(authError(err))
        util.Alert("error", err)
    }
}

/* USER LOGIN: api request */
export const login = async (info, dispatch) => {
    try {
        dispatch(authStart())

        const { data } = await publicRequest.post(`/users/login`, info)
        dispatch(authSuccess(data))
        localStorage.setItem('userInfo', JSON.stringify(data));
        util.Alert("success", data.message)
        return <Navigate to="/dashboard" />
    } catch (error) {
        let err = error.response?.data;
        dispatch(authError(err))
        util.Alert("error", err)
    }
}


/* CREATE SERVICE POST: api request */
