import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const {active:note} = useSelector( state => state.notes );
    const [formValues, handleInputChange, reset ] = useForm(note);
    const { body, title } = formValues;
    const dispatch = useDispatch();


    const activeId = useRef( note.id )

    useEffect(() => {
        
        if (( note.id ) !== activeId.current ){
            reset(note);
            activeId.current = note.id
        }

    }, [note, reset])

    useEffect(() => {
        dispatch( activeNote(formValues.id, {...formValues}) )
    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch( startDeleting(formValues.id) )
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Un titulo bien guapo"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea 
                    placeholder="What did you do today"
                    className="notes__textarea" 
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                >
                </textarea>

                {
                    (note.url) &&
                    <div className="notes__image">
                        <img
                            src={note.url}
                            alt="un barquito"
                        />
                    </div>
                }

            </div>
            <button 
                className="btn btn-danger"
                onClick={handleDelete}
            >
            Delete note
            </button>
        </div>
    )
}
