import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import * as actions from '../../redux/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import MembersList from './MembersList'

class MembersPage extends Component {
  componentDidMount(){
    this.props.fetchMembers();
  }

  render() {
    const { members } = this.props;
    return (
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">😎 Yes, This is members</h1>
        </header>
        <p className="App-intro">
          Here are members
        </p>
        <MembersList members={members}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    members: state.myReducer.members
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersPage);