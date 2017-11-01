import React, { Component } from 'react';
import {Grid, Col, Row, Thumbnail } from 'react-bootstrap';
import RepoList from './RepoList';
import SearchRepos from './SearchRepos';

class MemberThumb extends Component{
    constructor(props){
        super(props);
        this.state = {
            repos: [],
            searchVal: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.updateRepos = this.updateRepos.bind(this);
    }

    fetchRepos = () => {
        console.log("Fetching repos");
        const member = this.props.member;
        fetch(member.repos_url,{method: 'GET'})
            .then(res =>{
                if(!res.ok){
                    console.log("error")
                    return []
                }
                return res.json()
            })
            .then(memberRepos =>{
                if(!memberRepos){
                    return []
                }
                this.setState({repos: memberRepos});
                this.setState({allRepos: memberRepos});
            })
    }

    componentDidMount(){
        return this.fetchRepos()
    }

    handleSearch(val){
        this.setState({searchVal: val})
        this.updateRepos();
      }
    
    updateRepos(){
        let repos = this.state.repos;
        const allRepos = this.state.allRepos;
        const { searchVal } = this.state;
    
        if(searchVal === ''){
          return this.setState({repos: allRepos})
        } else {
          const allRepos = repos;
          repos = allRepos.filter((repo => repo.name.match(new RegExp(searchVal))));
          return this.setState({repos: repos})
        }
      }
    
    render(){
        const member = this.props.member;
        const {repos} = this.state.repos;
        return(
            <Grid>
                <Row>
                <Col xs={6} md={10}>
                <Thumbnail src={member.avatar_url} alt="242x200" className="img-responsive">
                    <h3>{member.login}</h3>
                    <SearchRepos
                    onSubmit={this.handleSearch.bind(this)}
                    repos={repos}
                    />
                    <RepoList repos={this.state.repos}/>
                </Thumbnail>
                </Col>
                </Row>
            </Grid>
        )
    }
}

export default MemberThumb;