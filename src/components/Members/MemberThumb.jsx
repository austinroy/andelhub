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
    fetchRepos = (member) => {
        console.log("Fetching repos");
        member = this.props.member;
        fetch(member.repos_url,{method:'GET'})
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
                this.setState({repos:memberRepos});
            })
    }

    componentWillMount(member){
        return this.fetchRepos(member)
    }
    
    render(){
        const member = this.props.member;
        return(
            <Grid>
                <Row>
                <Col xs={6} md={4}>
                <Thumbnail src={member.avatar_url} alt="242x200" className="img-responsive">
                    <h3>{member.login}</h3>
                    <RepoList repos={this.state.repos}/>
                    <p>
                    <Button bsStyle="primary">Repo details</Button>&nbsp;
                    </p>
                </Thumbnail>
                </Col>
                </Row>
            </Grid>
        )
    }
}

export default MemberThumb;