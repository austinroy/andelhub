import React, {Component} from 'react';

class RepoListBody extends Component {

    render(){
        const repo = this.props.repo;
        return (
            <tbody>
                    <tr>
                        <td>{repo.id}</td>
                        <td>{repo.name}</td>
                    </tr>
            </tbody>
        )
    }
}

export default RepoListBody;