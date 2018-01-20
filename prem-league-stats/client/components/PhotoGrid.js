import React from 'react'
import Single from './Single'
import { Link } from 'react-router';
import { bindActionCreators } from "redux";
import * as playerActionCreators from "../actions/players";
import { connect } from "react-redux";



class PhotoGrid extends React.Component{
	
	componentWillMount(){
		this.props.actions.fetchPlayers();
	}
    
  render(){
    return(
      <div className="photo-grid">
        Hello
        <Single/>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        players: state.players
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(playerActionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
