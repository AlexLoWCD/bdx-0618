import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {updateVilles} from '../../actions';

class Voyageur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      villes: props.voyageur.villes,
    };

    this.toggle = this.toggle.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  toggle() {
    this.setState({
      modal: true
    });
  }

  submitForm() {
    this.props.updateVilles(this.props.voyageur.id, this.state.villes);
    this.setState({
      modal: false
    });
  }

  toggleCheckbox(villeId) {
    let newStateVille = [...this.state.villes];
    if (newStateVille.includes(villeId)) {
      newStateVille = this.state.villes.filter(v => v !== villeId);
    } else {
      newStateVille.push(villeId);
    }

    this.setState({
      villes: newStateVille,
    });
  }

  render() {
    const {voyageur, villes} = this.props;
    return (
      <div className="Voyageur" >
        <div className="infos" onClick={this.toggle}>
          {voyageur.name}
        </div>

        <Modal isOpen={this.state.modal} className={this.props.className}>
          <ModalHeader >Mes voyages - {voyageur.name}</ModalHeader>
          <ModalBody>
            <Form>
            {
              villes.map(ville => (
                <FormGroup key={ville.id} check>
                  <Label check>
                    <Input
                      id={ville.id} 
                      type="checkbox" 
                      name="villes" 
                      checked={this.state.villes.includes(ville.id)}
                      onClick={() => this.toggleCheckbox(ville.id)}
                    />
                    {ville.name}
                  </Label>
                </FormGroup>
              ))
            }
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.submitForm}>Enregistrer</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mstp = state => ({
  villes: state.villes,
});

function mdtp(dispatch) {
  return bindActionCreators({updateVilles}, dispatch);
}

export default connect(mstp, mdtp)(Voyageur);