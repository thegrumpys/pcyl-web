import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, DropdownItem, Table, Badge, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { updateSubProblem, deleteSubProblem } from '../../store/actionCreators';
import { displayError } from '../../components/ErrorModal';

class ViewSubProblems extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onCreateEditNameChange = this.onCreateEditNameChange.bind(this);
        this.onCreateEditCancel = this.onCreateEditCancel.bind(this);
        this.onCreateEditSave = this.onCreateEditSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteNo = this.onDeleteNo.bind(this);
        this.onDeleteYes = this.onDeleteYes.bind(this);
        this.onSelectAll = this.onSelectAll.bind(this);
        this.onDeselectAll = this.onDeselectAll.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onSave = this.onSave.bind(this);
        this.state = {
            modal: false,
            createEditModal: false,
            deleteModal: false,
            subproblems: this.props.subproblems,
            symbol_table: this.props.symbol_table
        };
        console.log('this.props.subproblems=',this.props.subproblems);
    }

    // ===========================================================================
    // Sub-Problem Modal
    // ===========================================================================

    toggle() {
        console.log('In SubProblems.toggle');
        // Pop-up subproblem modal, and copy model subproblems to local subproblems
        this.setState({
            modal: !this.state.modal,
            subproblems: this.props.subproblems,
            symbol_table: this.props.symbol_table
        });
    }

    onCreate() {
        console.log('In SubProblems.onCreate');
        // Find available subproblem number and create corresponding mask. If none then display error
        if (this.state.subproblems.length === 32) {
            displayError('No more sub-problems are available');
            return;
        }
        var used = new Array(32); 
        this.state.subproblems.forEach((element) => { used[element.number] = 1; });
        console.log('used=',used);
        var number = used.findIndex((element) => {return element === undefined});
        console.log('number=',number);
        var mask = 1 << number;
        console.log('mask=',mask);
        // Pop-up Create/Edit modal, set type to Create, set name to blank, and set all variables to inactive
        this.setState({
            createEditModal: !this.state.createEditModal,
            createEditType: "Create",
            name: '',
            number: number,
            mask: mask
        });
    }

    onEdit(name, event) {
        console.log('In SubProblems.onEdit name=',name,' event.target.value=',event.target.value);
        // Pop-up Create/Edit modal, set type to Edit, set name to element's name, and set all variables to inactive
        this.setState({
            createEditModal: !this.state.createEditModal,
            createEditType: "Edit",
            name: name
        });
    }

    onDelete(name, event) {
        console.log('In SubProblems.onDelete name=',name,' event.target.value=',event.target.value);
        // Pop-up confirmation modal
        this.setState({
            deleteModal: !this.state.deleteModal,
            name: name
        });
    }

    onSelect(name, event) {
        console.log('In SubProblems.onSelect name=',name,' event.target.value=',event.target.value);
        // Find subproblem by name and set active/inactive
    }

    onSelectAll() {
        console.log('In SubProblems.onSelectAll');
        // Activate all subproblems
    }

    onDeselectAll() {
        console.log('In SubProblems.onDeselectAll');
        // Deactivate all subproblems
    }

    onCancel() {
        console.log('In SubProblems.onCancel');
        this.setState({
            modal: !this.state.modal
        });
        // No-op
    }

    onSave() {
        console.log('In SubProblems.onSave');
        this.setState({
            modal: !this.state.modal
        });
        // Update all subproblems
    }
    
    // ===========================================================================
    // Create/Edit Modal
    // ===========================================================================

    onCreateEditNameChange(event) {
        console.log('In SubProblems.onCreateEditNameChange event.target.value=',event.target.value);
        // Update local subproblem name
        this.setState({
            name: event.target.value
        });
    }

    onCreateEditSelect(name, event) {
        console.log('In SubProblems.onCreateEditSelect name=',name,' event.target.value=',event.target.value);
        // Update local subproblem active/inactive variable's masks
    }

    onCreateEditSelectAll(event) {
        console.log('In SubProblems.onCreateEditSelectAll');
        // Update local subproblem variable's masks to active
    }

    onCreateEditDeselectAll(event) {
        console.log('In SubProblems.onCreateEditDeselectAll');
        // Update local subproblem variable's masks to inactive
    }

    onCreateEditCancel() {
        console.log('In SubProblems.onCreateEditCancel');
        // Hide Create/Edit modal, and No-op
        this.setState({
            createEditModal: !this.state.createEditModal
        });
    }

    onCreateEditSave() {
        console.log('In SubProblems.onCreateEditSave');
        // Validate input (name not blank). If not valie, return. If valid hide Create/Edit modal and update subproblem by name
        if (this.state.name === '') {
            displayError('Sub-problem name is blank. Enter sub-problem name');
            return;
        }
        this.setState({
            createEditModal: !this.state.createEditModal
        });
        this.props.updateSubProblem(this.state.name, this.state.number, this.state.mask);
    }

    // ===========================================================================
    // Delete Modal
    // ===========================================================================

    onDeleteNo() {
        console.log('In SubProblems.onDeleteNo');
        // Hide confirmation modal, and No-op
        this.setState({
            deleteModal: !this.state.deleteModal
        });
    }

    onDeleteYes() {
        console.log('In SubProblems.onDeleteYes name=', this.state.name);
        // Hide confirmation modal, and Delete subproblem by name
        this.setState({
            deleteModal: !this.state.deleteModal
        });
        this.props.deleteSubProblem(this.state.name);
    }

    // ===========================================================================
    // Delete Modal
    // ===========================================================================

    render() {
        console.log('In SubProblems.render');
        return (
            <React.Fragment>
                <DropdownItem onClick={this.toggle}>
                    Sub-Problems
                </DropdownItem>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader><img src="favicon.ico" alt="Open Design Optimization Platform (ODOP) icon"/> &nbsp; View : Sub-Problems </ModalHeader>
                    <ModalBody>
                        Select/deselect sub-problems to display<br /><br />
                        <Table borderless size="sm">
                            <thead>
                                <tr>
                                    <th className="text-center" width="10%"></th>
                                    <th className="text-left">Name</th>
                                    <th className="text-center" width="10%"></th>
                                    <th className="text-center" width="10%"><Badge color="secondary" onClick={this.onCreate}>+</Badge></th>
                                </tr>
                            </thead>
                            <tbody>
                            {   this.props.subproblems === undefined || this.props.subproblems.length === 0 ? <tr><td colSpan="4">No Sub-Problems</td></tr> :
                                this.props.subproblems.map(
                                    (subproblem) => {
                                        return (
                                            <tr key={subproblem.name}>
                                                <td><input type="checkbox" aria-label="Checkbox for display sub-problem" checked={subproblem.display !== undefined && subproblem.display} onChange={(event) => {this.onSelect(subproblem.name, event)}} /></td>
                                                <td>{subproblem.name}</td>
                                                <td><Badge color="secondary" onClick={(event) => {this.onEdit(subproblem.name, event)}}><span className="oi oi-pencil" title="pencil" aria-hidden="true" /></Badge></td>
                                                <td><Badge color="secondary" onClick={(event) => {this.onDelete(subproblem.name, event)}}><span className="oi oi-trash" title="trash" aria-hidden="true" /></Badge></td>
                                            </tr>
                                        );
                                    })
                            }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan="4">
                                        <Badge color="secondary" onClick={this.onSelectAll}>Select All</Badge>{' '}
                                        <Badge color="secondary" onClick={this.onDeselectAll}>Deselect All</Badge>
                                    </th>
                                </tr>
                            </tfoot>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.onCancel}>Cancel</Button>{' '}
                        <Button color="primary" onClick={this.onSave}>Save</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.createEditModal} className={this.props.className}>
                    <ModalHeader><img src="favicon.ico" alt="Open Design Optimization Platform (ODOP) icon"/> &nbsp; View : Sub-Problems : {this.state.createEditType} </ModalHeader>
                    <ModalBody>
                        {this.state.createEditType === 'Create' ? 'Enter' : 'Update'} sub-problem name and select/deselect variables for sub-problem membership<br/><br/>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Name: </InputGroupText>
                             </InputGroupAddon>
                            <Input type="text" value={this.state.name} placeholder="Enter sub-problem name" onChange={this.onCreateEditNameChange}/>
                        </InputGroup>
                        <Table borderless size="sm">
                            <thead>
                                <tr>
                                    <th colSpan="2">Independent Variables</th>
                                </tr>
                            </thead>
                            <tbody>
                            { this.props.symbol_table !== undefined && this.props.symbol_table.map(
                                    (element) => {
                                        return element.input && element.equationset && !element.hidden && (
                                            <tr key={element.name}>
                                                <td className="text-center" width="10%"><input type="checkbox" aria-label="Checkbox for display sub-problem" checked={element.ioclass !== undefined && element.ioclass} onChange={(event) => {this.onCreateEditSelect(element.name, event)}} /></td>
                                                <td className="text-left">{element.name}</td>
                                            </tr>
                                        );
                                    })
                            }
                            </tbody>
                            <thead>
                                <tr>
                                    <th colSpan="2">Dependent Variables</th>
                                </tr>
                            </thead>
                            <tbody>
                            { this.props.symbol_table !== undefined && this.props.symbol_table.map(
                                    (element) => {
                                        return !element.input && element.equationset && !element.hidden && (
                                            <tr key={element.name}>
                                                <td className="text-center" width="10%"><input type="checkbox" aria-label="Checkbox for display sub-problem" checked={element.ioclass !== undefined && element.ioclass} onChange={(event) => {this.onCreateEditSelect(element.name, event)}} /></td>
                                                <td className="text-left">{element.name}</td>
                                            </tr>
                                        );
                                    })
                            }
                            </tbody>
                            <thead>
                                <tr>
                                    <th colSpan="2">Calculation Inputs</th>
                                </tr>
                            </thead>
                            <tbody>
                            { this.props.symbol_table !== undefined && this.props.symbol_table.map(
                                    (element) => {
                                        return !element.equationset && !element.hidden && (
                                            <tr key={element.name}>
                                                <td className="text-center" width="10%"><input type="checkbox" aria-label="Checkbox for display sub-problem" checked={element.ioclass !== undefined && element.ioclass} onChange={(event) => {this.onCreateEditSelect(element.name, event)}} /></td>
                                                <td className="text-left">{element.name}</td>
                                            </tr>
                                        );
                                    })
                            }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan="3">
                                        <Badge color="secondary" onClick={this.onCreateEditSelectAll}>Select All</Badge>{' '}
                                        <Badge color="secondary" onClick={this.onCreateEditDeselectAll}>Deselect All</Badge>
                                    </th>
                                </tr>
                            </tfoot>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.onCreateEditCancel}>Cancel</Button>{' '}
                        <Button color="primary" onClick={this.onCreateEditSave}>Save</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.deleteModal} className={this.props.className}>
                    <ModalHeader><img src="favicon.ico" alt="Open Design Optimization Platform (ODOP) icon"/> &nbsp; View : Sub-Problems : Delete </ModalHeader>
                    <ModalBody>
                        Do you really want to delete sub-problem {this.state.name}?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.onDeleteNo}>No</Button>{' '}
                        <Button color="primary" onClick={this.onDeleteYes}>Yes</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}  

const mapStateToProps = state => ({
    subproblems: state.subproblems,
    symbol_table: state.symbol_table
});

const mapDispatchToProps = {
    updateSubProblem: updateSubProblem,
    deleteSubProblem: deleteSubProblem
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewSubProblems);