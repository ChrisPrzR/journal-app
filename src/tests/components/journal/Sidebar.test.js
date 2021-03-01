import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Sidebar } from '../../../components/journal/Sidebar';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn(),
}))

jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn(),
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        name: 'Pepe'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        notes:[]
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={store}>
        <Sidebar/> 
    </Provider>
)


describe('Testing <Sidebar/>', () => {
    
    test('should render ok', () => {

        expect(wrapper).toMatchSnapshot()

    });

    test('should call startLogout', () => {
        wrapper.find('button').simulate('click')

        expect(startLogout).toHaveBeenCalled()
        //expect( handleLogout ).toHaveBeenCalled()
    });

    test('should call startNewNote', () => {
        
        wrapper.find('.journal__new-entry').simulate('click')

        expect( startNewNote ).toHaveBeenCalled()

    });
})
