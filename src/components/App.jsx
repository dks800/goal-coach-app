import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompletedGoals from './CompletedGoals';

class App extends Component {
    signOut(){
        firebaseApp.auth().signOut();
    }
    render() {
        return(
            firebaseApp.auth().currentUser ? 
            <div className='text-center'>
                <button className='btn btn-danger pull-right' onClick={() => this.signOut()}>Sign out</button>
                <h6>Current User: { this.props.user.email }</h6>
                <AddGoal />
                <hr />
                <GoalList />
                <hr />
                <CompletedGoals />
            </div>
            :
            <div></div>
        )
    }
}

function mapStateToProps(state){
    const { user } = state;
    return {
        user
    };
}

export default connect(mapStateToProps, null)(App);
