import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

class AddGoal extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }
    addGoal(){
        const { email } = this.props.user;
        const { title } = this.state;
        goalRef.push({ email, title})
            .catch(errors => {
                alert('Error while pushing: ', errors);
        });
        this.setState({title: ''});
    }
    render(){
        return(
            <div className='form-inline'>
                <div className='form-group'>
                    <h3>Add your goal</h3>
                    <input className='form-control margin-5' placeholder='Add your goal'
                        onChange={event => this.setState({title: event.target.value})}
                        value={ this.state.title }
                    />
                    <button className='btn btn-success margin-5' onClick={() => this.addGoal()}>Submit</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { user } = state;
    return {
        user
    };
}

export default connect(mapStateToProps, null)(AddGoal);