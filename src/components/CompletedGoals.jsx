import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from '../firebase';
import { setCompleteGoals } from '../actions';


class CompletedGoals extends Component {
    componentDidMount(){
        completeGoalRef.on('value', data => {
            let completedGoals = [];
            data.forEach(goal => {
                let { title } = goal.val();
                completedGoals.push(title);
            })
            this.props.setCompleteGoals(completedGoals);
        })
    }

    removeCompletedGoals(){

    }

    render(){
       return(
            <div>
                <table style={{ margin: 'auto', width: '50%' }}>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px black solid' }}><strong><em>Sr. No.</em></strong></td>
                            <td style={{ border: '1px black solid' }}><strong><em>Completed Goals</em></strong></td>
                        </tr>
                        {
                            this.props.completeGoals.map((goal, index) => {
                                return <tr key={index} >
                                            <td style={{ border: '1px black solid' }}>{ index+1 }</td>
                                            <td style={{ border: '1px black solid' }}>{ goal }</td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

function mapStateToProps(state){
    const { completeGoals } = state;
    return {
        completeGoals
    }
}


export default connect(mapStateToProps, { setCompleteGoals })(CompletedGoals);