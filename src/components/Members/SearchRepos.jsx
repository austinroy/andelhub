import React, {Component} from 'react';
import propTypes from 'prop-types';

class SearchRepos extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchVal: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();

        this.props.onSubmit(this.state.searchVal);
    }

    handleChange(event){
        this.setState({searchVal:event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type="search" 
                placeholder="Search repos"
                onChange={this.handleChange}
                />
            </form>
        )
    }
}

SearchRepos.propTypes = {
    onSubmit: propTypes.func.isRequired
}


export default SearchRepos;