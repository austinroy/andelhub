import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import RepoListBody from './RepoListBody'

class RepoList extends Component {
    render(){
        const repos = this.props.repos;
        return (
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Repo Name</th>
                    </tr>
                </thead>
                {this.props.repos.map((repo, index) =>{
                    return(
                        <RepoListBody key={index} repo={repo} />
                    )
                })}
            </Table>
        )
    }
}

export default RepoList;