import React, {Component} from 'react';

class RepoListBody extends Component {

    render(){
        const {repo, index} = this.props;
        console.log(index);
        const repo_url = "/repo/" + repo.id
        return (
            <tbody>
                    <tr>
                        <td>{index}</td>
                        <td><a href={repo.html_url}>{repo.name}</a></td>
                        <td>{repo.language}</td>
                        <td>{repo.description}</td>
                    </tr>
            </tbody>
        )
    }
}

export default RepoListBody;