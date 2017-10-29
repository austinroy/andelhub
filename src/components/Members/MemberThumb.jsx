import React, { Component } from 'react';
import {Grid, Col, Row, Thumbnail, Button } from 'react-bootstrap';
import RepoList from './RepoList'

class MemberThumb extends Component{
    constructor(props){
        super(props);
        this.state = {
            repos: []
        }
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
                    return "This user has no repos"
                }
                this.setState({repos: memberRepos});
            })
    }

    componentDidMount(){
        return this.fetchRepos()
    }
    
    render(){
        const member = this.props.member;
        return(
            <Grid>
                <Row>
                <Col xs={6} md={10}>
                <Thumbnail src={member.avatar_url} alt="242x200" className="img-responsive">
                    <h3>{member.login}</h3>
                    <RepoList repos={this.state.repos}/>
                </Thumbnail>
                </Col>
                </Row>
            </Grid>
        )
    }
}

export default MemberThumb;