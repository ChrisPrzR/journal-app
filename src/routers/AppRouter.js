import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import {useDispatch} from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged( async (user) => {
		if( user?.uid ){ // El ? evalua si el objeto user tiene datos
			dispatch(login( user.uid, user.displayName ));
			setIsLoggedIn(true);

			dispatch(startLoadingNotes(user.uid))
		} else {
			setIsLoggedIn(false);
		}
		setChecking(false);
	});
    }, [ dispatch, setChecking, setIsLoggedIn ])

	if( checking ){
		return ( 
			<h1>Just a moment...</h1> // Puedo crear un componente de espera
		)
	}

    return (
      <Router>
        <div >
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
              	<PublicRoute 
                  	path="/auth" 
                  	component={AuthRouter}
				  	isLoggedIn={isLoggedIn}
				/>
              	<PrivateRoute 
                  	exact path="/" 
                  	component={JournalScreen}
			  		isLoggedIn={isLoggedIn}
				/>      
				<Redirect to="/auth/login" />            
            </Switch>
        </div>
      </Router>
)}
