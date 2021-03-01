import { types } from '../types/types';

const initialState = {
    loading: false,
    msgError: null
}

export const uiReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.uiSetError:
            return {
               ...state, //No quiero cambiar el loading solo el msgError
               msgError: action.payload
            }  
        case types.uiRemoveError:
            return {
                ...state, //No quiero cambiar el loading solo el msgError
                msgError: null
            }  
        case types.uiStartLoading:
            return{
                ...state,
                loading: true
            }
        case types.uiFinishLoading:
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
}