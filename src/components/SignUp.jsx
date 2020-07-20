import React, { Component }  from 'react';
import {Link} from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component{
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

    signup(){
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error});
            })
    }

    render(){
        return(
            <div className='form-inline text-center'>
                <h2>SignUp for the application</h2>
                <div className='form-group'>
                    <input className='form-control margin-5' placeholder='Enter your email'
                        onChange={event => this.setState({email: event.target.value})} type='text'/>
                    <input className='form-control margin-5' placeholder='Enter your password'
                        onChange={event => this.setState({password: event.target.value})} type='password'/>
                    <button className='btn btn-primary margin-5' type='button' onClick={() => this.signup()}>SignUp</button>
                </div>
                {
                    this.state.error.message ? <div className="sign-in-up-errors alert alert-danger" role="alert">{this.state.error.message}</div> : <div></div>
                }
                <div><Link to={'/signin'}>Existing user? Click here to sign in</Link></div>
            </div>
        )
    }
}

export default SignUp;
