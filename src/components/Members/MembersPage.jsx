import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import * as actions from '../../redux/actions';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import MembersList from './MembersList';
import SearchMembers from './SearchMembers';

class MembersPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      members: this.props.members,
      searchVal: ''
    }
    this.updateMembers =  this.updateMembers.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    this.props.fetchMembers();
    const { members } = this.props;
    this.setState ({members: members})
    this.updateMembers();
  }

  handleSearch(val){
    this.setState({searchVal: val})
  }

  updateMembers(){
    let { members } = this.props;
    const { searchVal } = this.state;

    if(searchVal === ''){
      return {members}
    } else {
      const allMembers = members;
      members = allMembers.filter((member => member.login.match(new RegExp(searchVal))));
      return {members}
    }
  }

  render() {
    const { members } = this.updateMembers();
    return (
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">😎 Yes, This is members</h1>
        </header>
        <p className="App-intro">
          Here are members
          Search members:
        </p>
        <SearchMembers
          members = {members}
          onSubmit={this.handleSearch.bind(this)}
        />
        <br />
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