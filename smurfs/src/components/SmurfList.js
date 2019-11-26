import React, {useEffect} from 'react';
import {fetchSmurfs} from './actions/getAction';
import {connect} from 'react-redux';
import Smurf from './Smurf';

const SmurfList = props =>{
    useEffect (()=>{
        props.fetchSmurfs();
    }, [])

    if(props.isLoading){
        return <h1>Loading Smurf Villagers...</h1>
    }

    return(
        <div>    
            {this.props.smurfs.data ? this.props.smurfs.data.map((smurf, i)=>{
                return <Smurf key={i} smurf={smurf}/>;
            }): null}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList); 