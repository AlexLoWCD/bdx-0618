import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from '../actions';

const UserList = ({ users, selectUser }) => {
  return (
    <div className="UserList">
      <ul>
        {
          users.map(user => 
            <li 
              key={user.id}
              onClick={() => selectUser(user)}
            >
              {user.name}
            </li>
          )
        }
      </ul>
    </div>
  );
}

const mstp = (state) => ({
  users: state.users,
});

const mdtp = (dispatch) => {
  return bindActionCreators({selectUser}, dispatch);
}

export default connect(mstp, mdtp)(UserList);