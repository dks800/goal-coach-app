import React, { Component } from 'react';
import {Link} from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signin(){
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error});
            })
    }

    render(){
        return(
            <div className='form-inline margin-5'>
                <h2>SignIn to the application</h2>
                <div className='form-group'>
                    <input type='text' className='form-control margin-5' placeholder='Enter email to sign in'
                        onChange={event => this.setState({email: event.target.value})}/>
                    <input type='password' className='form-control margin-5' placeholder='Enter password to sign in'
                        onChange={event => this.setState({password: event.target.value})}/>
                    <button className='btn btn-primary margin-5' onClick={() => this.signin()}>SignIn</button>
                </div>
                {
                    this.state.error.message ? <div className='sign-in-up-errors alert alert-danger'>{this.state.error.message}</div> : <div></div>
                }
                <div><Link to={'/signup'}>Signup with application</Link></div>
            </div>
        )
    }
}

export default SignIn;
