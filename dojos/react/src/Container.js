import React, { Component } from 'react';
import Form from './Form';

class Container extends Component {
    render() {
        return(
            <Form updateForm={this.props.onTitleChange} />
        )
    }
}

export default Container;