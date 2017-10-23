import React, {Component} from 'react';
import MemberThumb from './MemberThumb';

class MembersList extends Component {
    render(){
        return (
            <div>
                {this.props.members.map((member, index) => {
                    return (
                        <MemberThumb key={index} member={member} />
                    )
                })}
            </div>
        )
    }
}

export default MembersList;