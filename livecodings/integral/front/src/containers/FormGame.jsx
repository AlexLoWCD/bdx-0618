import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import {fetchPlatform} from '../actions/platform';

class FormGame extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPlatform())
  }   

  render() {
    const { handleSubmit, pristine, submitting, platforms } = this.props;
    return (
      <div className="FormGame">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <div>
              <Field
                name="name"
                component="input"
                type="email"
                placeholder="Name"
              />
            </div>
          </div>
          <div>
            <label>Release date</label>
            <div>
              <Field
                name="release_date"
                component="input"
                type="date"
              />
            </div>
          </div>
          <div>
        <label>Platform</label>
        <div>
          <Field name="id_platform" component="select">
            {
              platforms.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))
            }
          </Field>
        </div>
      </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

FormGame = reduxForm({
  // a unique name for the form
  form: 'formgame'
})(FormGame);

const mstp = ({platforms}) => ({
  platforms: platforms.list
});

FormGame = connect(mstp)(FormGame)

export default FormGame;