import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import '@testing-library/jest-dom';

import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth';
import { types } from '../../types/types';


const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Testing Auth actions', () => {

    beforeEach(()=>{
        store = mockStore(initState);
    });
    
    test('login and logout should create their actions', () => {
        
        const uid = 'das123';
        const displayName = 'Chris';
        
        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type:types.login,
            payload: {
                uid, 
                displayName
            }
        })

        expect(logoutAction).toEqual({
            type: types.logout
        })

    })

    test('debe de realizar el startLogout', async() => {

        await store.dispatch( startLogout() )

        const actions = store.getActions()

        expect(actions[0]).toEqual({
            type: types.logout
        })

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        })
    })

    test('should launch startEmailAndPassword', async() => {
       
        await store.dispatch( startLoginEmailPassword('test@testing.com', '123456') );

        const actions = store.getActions()

        expect( actions[1] ).toEqual({
            type: types.login,
            payload: {
                uid: expect.any(String),
                displayName: null
            }
        })
    })
    
    
})
