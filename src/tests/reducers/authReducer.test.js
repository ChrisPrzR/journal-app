import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types";


describe('Testing authReducer', () => {
    
    test('should login', () => {
        
        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 123,
                displayName: 'Chris'
            }
        }
        const state = authReducer(initState, action);

        expect(state).toEqual({
            uid: 123,
            name: 'Chris'
        })
    })
    test('should logout', () => {
        
        const initState = {
            uid: 'ads546asdff',
            displayName: 'Chris'
        };

        const action = {
            type: types.logout
        }
        const state = authReducer(initState, action);

        expect(state).toEqual({})
    })
    
    test('should not modify state', () => {
        
        const initState = {
            uid: 'ads546asdff',
            displayName: 'Chris'
        };

        const action = {
            type: 'string that will not work'
        }

        const state = authReducer(initState, action);

        expect(state).toEqual(initState)
    })
    
})
