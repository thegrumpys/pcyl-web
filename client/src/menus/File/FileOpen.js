import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, DropdownItem } from 'reactstrap';
import { Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { load } from '../../store/actionCreators';
import { displayError } from '../../components/ErrorModal';
import { displaySpinner } from '../../components/Spinner';
import { migrate as pcyl_migrate } from '../../designtypes/Piston-Cylinder/migrate';
import { migrate as solid_migrate } from '../../designtypes/Solid/migrate';
import { migrate as spring_migrate } from '../../designtypes/Spring/migrate';

class FileOpen extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.state = {
            modal: false,
            designs: [],
            type: this.props.type,
            name: this.props.name
        };
    }

    getDesigns(type) {
//        console.log('In FileOpen.getDesigns type=', type);
        // Get the designs and store them in state
        displaySpinner(true);
        fetch('/api/v1/designtypes/'+type+'/designs')
            .then(res => {
                displaySpinner(false);
                if (!res.ok) {
                   throw Error(res.statusText);
                }
                return res.json()
            })
            .then(designs => this.setState({ designs }))
            .catch(error => {
                displayError('GET of design names failed with message: \''+error.message+'\'');
            });
    }
    
    getDesign(type,name) {
//        console.log('In FileOpen.getDesign type=', type, ' name=', name);
        displaySpinner(true);
        fetch('/api/v1/designtypes/'+type+'/designs/' + name)
            .then(res => {
                displaySpinner(false);
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res.json()
            })
            .then((design) => {
                var migrated_design;
                switch(design.type) {
                default:
                case 'Piston-Cylinder':
                    migrated_design = pcyl_migrate(design);
                    break;
                case 'Solid':
                    migrated_design = solid_migrate(design);
                    break;
                case 'Spring':
                    migrated_design= spring_migrate(design);
                    break;
                }
                this.props.load(migrated_design)
            })
            .catch(error => {
                displayError('GET of \''+name+'\' design failed with message: \''+error.message+'\'');
            });
    }
    
    toggle() {
//        console.log('In FileOpen.toggle this.props.type=',this.props.type,' this.props.name=',this.props.name);
        this.getDesigns(this.props.type);
        this.setState({
            modal: !this.state.modal,
            type: this.props.type,
            name: this.props.name
        });
    }
    
    onSelect(event) {
//        console.log('In FileOpen.onSelect event.target.value=',event.target.value);
        this.setState({
            name: event.target.value 
        });
    }
    
    onOpen() {
//        console.log('In FileOpen.onOpen this.state.type=',this.state.type,' this.state.name=',this.state.name);
        this.setState({
            modal: !this.state.modal
        });
        // Load the model
        var type = this.state.type;
        if (type === undefined) type = 'Piston-Cylinder';
        var name = this.state.name;
        if (name === undefined) name = 'startup';
        this.getDesign(type,name);
    }
    
    onCancel() {
//        console.log('In FileOpen.onCancel');
        this.setState({
            modal: !this.state.modal
        });
        // Noop - all done
    }

    render() {
        return (
            <React.Fragment>
                <DropdownItem onClick={this.toggle}>
                    Open&hellip;
                </DropdownItem>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader><img src="favicon.ico" alt="Open Design Optimization Platform (ODOP) icon"/> &nbsp; File : Open </ModalHeader>
                    <ModalBody>
                        <br />
                        <Label for="fileOpenSelect">Select design to open:</Label>
                        <Input type="select" id="fileOpenSelect" onChange={this.onSelect} value={this.state.name}>
                            {this.state.designs.map((design, index) =>
                                <option key={index} value={design}>{design}</option>
                            )}
                        </Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.onCancel}>Cancel</Button>{' '}
                        <Button color="primary" onClick={this.onOpen}>Open</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}  

const mapStateToProps = state => ({
    type: state.type, 
    name: state.name, 
});

const mapDispatchToProps = {
    load: load
};

export default connect(mapStateToProps, mapDispatchToProps)(FileOpen);
