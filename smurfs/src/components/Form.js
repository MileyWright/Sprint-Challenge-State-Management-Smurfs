import React from 'react';
import {connect} from 'react-redux';
import {getSTART} from './actions';

const Form = props =>{
    return(
        <>
        <div>
        name : {props.smurfData.name}
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        error: state.error,
        name: state.name,
        age: state.age,
        height: state.height
    }
}
export default connect(
    mapStateToProps,
        {getSTART}
)(Form)