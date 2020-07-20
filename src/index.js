import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { logUser } from './actions';
import './index.css';

const store = createStore(reducers);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        console.log('user has singed in/up.', user);
        const { email } = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    } else {
        console.log('user need to sign in/up');
        browserHistory.replace('/signin');
    }
})

ReactDOM.render(
    <Provider store={ store }>
        <Router path='/' history={browserHistory}>
            <Route path='/app' component={App} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
        </Router>
    </Provider>,
    document.getElementById('root')
);