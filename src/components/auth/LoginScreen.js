import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { removeError, setError } from '../../actions/ui';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {


    const dispatch = useDispatch();
    const {msgError, loading} = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        isLoginValid() && dispatch( startLoginEmailPassword(email, password) )
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    const isLoginValid = () => {
        if(!validator.isEmail( email )){
            dispatch(setError('Must be a valid email'))
            return false
        }else if(password.length < 6 ){
            dispatch(setError('Password must be 6 characters or more'))
            return false
        }
        dispatch(removeError())
        return true
    }

    return (
        <div>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={ handleLogin }>
            {
                msgError &&
                (<div className="auth__alert-error">{`${msgError}`}</div>)
                
            }
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={ handleInputChange }
                />

                {
                    loading ? 
                    <div>
                        <i className="fas fa-spinner btn btn-primary"></i>
                    </div>
                    :
                    <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    >
                    Login
                    </button>
                }
                

                <hr/>
                <div className="auth__social-networks">
                    <p>Social Login</p>
                    <div 
                    className="google-btn"
                    onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link">Create new account</Link>
            </form>
        </div>
    )
}
