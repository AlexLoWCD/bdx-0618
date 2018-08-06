import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton() {
        const inputValue = document.getElementById("input").value;
        this.props.updateForm(inputValue);
    }

    render() {
        return (
            <div>
                <input id="input" type="text" />
                <button onClick={this.onClickButton}>Go</button>
            </div>
        )
    }
}

export default Form;