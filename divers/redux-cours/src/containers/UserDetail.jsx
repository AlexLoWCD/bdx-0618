import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeName} from '../actions';

class UserDetail extends Component {
  render() { 
    const {user, changeName} = this.props;
    return (
      <div className="UserDetail">
        {
          (!user) 
            ? <div>Sélectionnez un utilisateur</div>
            : <div>
              <input
                ref="username"
                type="text" 
                name="name" 
                value={user.name} 
                onChange={() => {
                  const {username} = this.refs;
                  changeName(user.id, username.value);
                }}
              />
              <br />
              <div>{user.lastname}</div>
            </div>
        }
      </div>
    );
  }
}

const mstp = (state) => ({
  user: state.activeUser
});

const mdtp = dispatch => {
  return bindActionCreators({changeName}, dispatch);
}
 
export default connect(mstp, mdtp)(UserDetail);