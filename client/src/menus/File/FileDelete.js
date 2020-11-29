import React, { Component } from 'react';
import { Button, Modal, NavDropdown, Form, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeUser } from '../../store/actionCreators';
import { displayError } from '../../components/ErrorModal';
import { displaySpinner } from '../../components/Spinner';
import { logUsage } from '../../logUsage';
import config from '../../config';
import { withOktaAuth } from '@okta/okta-react';
import { withRouter } from 'react-router-dom';

class FileDelete extends Component {

    constructor(props) {
        super(props);
//        console.log("In FileDelete.constructor props=",props);
        this.toggle = this.toggle.bind(this);
        this.onSelectType = this.onSelectType.bind(this);
        this.onSelectName = this.onSelectName.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            modal: false,
            types: config.design.types,
            names: [],
            type: this.props.type,
            name: '',
        };
    }

    async componentDidMount() {
//        console.log('In FileDelete.componentDidMount');
    }

    componentDidUpdate(prevProps) {
//      console.log('In FileDelete.componentDidUpdate');
      if (prevProps.type !== this.props.type) {
//          console.log('In FileDelete.componentDidUpdate prevProps=',prevProps.type,'props=',this.props.type);
          this.setState({ 
              type: this.props.type
          });
          this.getDesignNames(this.props.type);
      }
  }

    getDesignNames(type) {
        // Get the names and store them in state
//        console.log('In FileDelete.getDesignNames type=', type);
        displaySpinner(true);
        fetch('/api/v1/designtypes/'+encodeURIComponent(type)+'/designs', {
            headers: {
                Authorization: 'Bearer ' + this.props.user
            }
        })
        .then(res => {
            displaySpinner(false);
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json()
        })
       .then(names => {
//           console.log('In FileDelete.getDesignNames names=', names);
           this.setState({ 
               names: names.filter((design) => {return design.user !== null})
           });
           var name = '';
           if (this.state.names.length > 0)
               name = this.state.names[0].name; // Default to first name
           this.setState({ 
               name: name
           });
       })
       .catch(error => {
           displayError('GET of design names failed with message: \''+error.message+'\'');
       });
    }
    
    deleteDesign(type, name) {
//        console.log('In FileDelete.deleteDesign type=', type, ' name=', name);
        displaySpinner(true);
        fetch('/api/v1/designtypes/'+encodeURIComponent(type)+'/designs/'+encodeURIComponent(name), {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.props.user
            },
        })
        .then(res => {
            displaySpinner(false);
            if (!res.ok) {
                throw Error(res.statusText);
            }
            logUsage('event', 'FileDelete', { 'event_label': type + ' ' + name });
            return res.json()
        })
        .catch(error => {
            displayError('DELETE of \''+name+'\' design  \''+type+'\' design type failed with message: \''+error.message+'\'');
        });
    }
    
    toggle() {
//        console.log('In FileDelete.toggle this.props.type=',this.props.type,' this.props.name=',this.props.name);
        this.getDesignNames(this.props.type);
        this.setState({
            modal: !this.state.modal,
        });
    }
    
    onSelectType(event) {
//      console.log('In FileDelete.onSelectType event.target.value=',event.target.value);
      this.setState({
          type: event.target.value
      });
      this.getDesignNames(event.target.value);
}

    onSelectName(event) {
//        console.log('In FileDelete.onSelect event.target.value=',event.target.value);
        this.setState({
            name: event.target.value 
        });
    }
    
    onSignIn() {
//      console.log('In FileDelete.onSignIn');
      this.setState({
          modal: !this.state.modal
      });
      this.props.history.push('/login');
    }

    onCancel() {
//      console.log('In FileDelete.onCancel');
      this.setState({
          modal: !this.state.modal
      });
      // Noop - all done
  }

    onDelete() {
//        console.log('In FileDelete.onDelete this.state.type=',this.state.type,' this.state.name=',this.state.name);
        // Validate name, and delete the database element
        if (this.state.name === '') {
            displayError("Select design to delete.");
            return;
        }
        this.setState({
            modal: !this.state.modal
        });
        this.deleteDesign(this.state.type,this.state.name);
    }
    
    render() {
//        console.log('In FileDelete.render this.props=', this.props);
        return (
            <React.Fragment>
                <NavDropdown.Item onClick={this.toggle}>
                    Delete&hellip;
                </NavDropdown.Item>
                <Modal show={this.state.modal} className={this.props.className} onHide={this.onCancel}>
                    <Modal.Header>
                        <Modal.Title>
                            <img src="favicon.ico" alt="Open Design Optimization Platform (ODOP) icon"/> &nbsp; File : Delete
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <br />
                        {!this.props.authState.isAuthenticated && <Alert variant="info">You are not signed in. Optionally Sign In to open your private design and enable Save, Save As, and Delete</Alert>}
                        <Form.Label htmlFor="fileDeleteSelectType">Select design type for delete:</Form.Label>
                        <Form.Control as="select" id="fileDeleteSelectType" onChange={this.onSelectType} value={this.state.type}>
                            {this.state.types.map((designtype, index) =>
                                <option key={index} value={designtype}>{designtype}</option>
                            )}
                        </Form.Control>
                        <br />
                        <Form.Label htmlFor="fileDeleteSelectName">Select design to delete:</Form.Label>
                        <Form.Control as="select" id="fileDeleteSelectName" onChange={this.onSelectName}>
                            {this.state.names.map((design, index) => {
                                return <option key={index} value={design.name}>{design.name}</option>
                            })}
                        </Form.Control>
                    </Modal.Body>
                    <Modal.Footer>
                        {!this.props.authState.isAuthenticated && <Button variant="info" onClick={this.onSignIn}>Sign In...</Button>}{' '}
                        <Button variant="secondary" onClick={this.onCancel}>Cancel</Button>{' '}
                        <Button variant="primary" onClick={this.onDelete} disabled={!this.props.authState.isAuthenticated && this.state.names.length === 0 ? true : false}>Delete</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    name: state.name, 
    type: state.model.type, 
});

const mapDispatchToProps = {
    changeUser: changeUser,
};

export default withRouter(withOktaAuth(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(FileDelete)
));