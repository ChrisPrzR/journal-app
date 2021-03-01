import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';
import { types } from '../../types/types';

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn().mockImplementation( () => {
        console.log('se ah llamada')
        return 'https://www.holacrayolass.com/cosa.png' //se ejecuta sincrona
        //return Promise.resolve('https://holacrayolass.com/cosa.png');
    })
}))

const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);


const initState = {
    auth:{
        uid: 'testing'
    },
    notes:{
        active: {
            id: 'fb4aYvB8kjXJbAojtnXX',
            title: 'Hola2',
            body: 'Mundo2'
        }
    }
}


let store = mockStore(initState);


describe('Testing notes actions', () => {

    beforeEach( () => {
        store = mockStore(initState)
    })

    test('should create a new note startNewNote', async() => {
        
        await store.dispatch( startNewNote() );

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)    
            }
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)    
            }
        });

        const docId = actions[1].payload.id

        await db.doc(`/testing/journal/notes/${docId}`).delete(); 
    });

    test('should load notes startLoadingNotes', async() => {
        await store.dispatch(startLoadingNotes('testing'))

        const actions = store.getActions()

        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }

        expect(actions[0].payload[0]).toMatchObject(expected);
    });

    test('startSaveNote should update note', async() => {
        const note = {
            id: 'CNU4KVBxpVohNSfwM1gv',
            body: 'body',
            title: 'titulo'
        }

        await store.dispatch( startSaveNote(note) );

        const docRef = await db.doc(`/testing/journal/notes/${note.id}`).get();
        expect( docRef.data().title ).toEqual( note.title )
    })
    
    test('startUploading should update URL in entry', async() => {
        
        const file = new File( [], 'foto.png' );

        await store.dispatch( startUploading(file) )

        const docRef = await db.doc('/testing/journal/notes/fb4aYvB8kjXJbAojtnXX').get();
        expect( docRef.data().url ).toBe( 'https://holacrayolass/cosa.png' )


    })
    
    
});
