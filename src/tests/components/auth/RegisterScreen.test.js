import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';

import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);
// store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
)


describe('Testing <RegisterScreen/>', () => {
    
    test('should render ok', () => {
        
        expect(wrapper).toMatchSnapshot()

    });

    test('should dispatch the right action', () => {
        
        const emailField = wrapper.find('input[name="email"]');

        emailField.simulate('change', {
            target: {
                value: '',
                name: 'email'
            }
        });

        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });

        const actions = store.getActions()
        expect( actions[0] ).toEqual({
            type: types.uiSetError,
            payload: 'Email is not valid'
        });
    });

    test('should show alert box with error', () => {
        const initState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'Invalid email'
            }
        };
        
        let store = mockStore(initState);
        // store.dispatch = jest.fn()
        
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        );
        
        expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
    })    
})
