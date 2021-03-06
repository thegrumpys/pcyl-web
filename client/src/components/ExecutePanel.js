import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Alert, Button, Container, Row } from 'react-bootstrap';
import { load } from '../store/actionCreators';
import { connect } from 'react-redux';
import config from '../config';

export var startExecute = function(prefix,steps) {
//    console.log('In startExecute this=',this,'prefix=',prefix,'steps=',steps);
    if (steps !== undefined && steps[0] !== undefined) {
        const { store } = this.context;
        var design = store.getState();
        this.setState({
            modal: true, // Default: do display
            prefix: prefix,
            // Put current store state into steps[0].state - remember this for "back" time travel
            steps: Object.assign([...steps], {0: Object.assign({}, steps[0], {state: design.model})}),
            step: 0,
            title: steps[0].title,
            text: steps[0].text, // Default: first text
        });
        if (steps[0].actions !== undefined) {
            steps[0].actions.forEach((action) => { store.dispatch(action); })
        }
    }
}

export var stopExecute = function() {
//    console.log('In stopExecute this=',this);
    this.setState({
        execute_name: undefined, // Clear execute name
        modal: false, // Default: do not display
        prefix: '',
        steps: null,
        step: 0,
        title: '',
        text: '',  // Default: no text
    });
}

class ExecutePanel extends Component {

    constructor(props) {
        super(props);
//        console.log('In ExecutePanel.constructor props=',props);
        this.onNext = this.onNext.bind(this);
        this.onBack = this.onBack.bind(this);
        this.onCancel = this.onCancel.bind(this);
        startExecute = startExecute.bind(this); // Bind external function - no 'this'
        stopExecute = stopExecute.bind(this); // Bind external function - no 'this'
        this.state = {
            execute_name: config.url.execute, // Remember execute name
            modal: false,
            prefix: '',
            steps: null,
            step: 0,
            title: '',
            text: '', // Default: no text
        };
    }
    
    componentDidMount() {
//        console.log('In ExecutePanel.componentDidMount this=',this);
        if (this.state.execute_name !== undefined) {
//            console.log('In ExecutePanel.componentDidMount this.state.execute_name=',this.state.execute_name);
            var { execute } = require('../designtypes/'+this.props.type+'/'+this.state.execute_name+'.js'); // Dynamically load execute
//            console.log('In ExecutePanel.componentDidMount execute=',execute);
            startExecute('Execute : ' + this.state.execute_name, execute.steps);
        }
        this.setState({
            store: this.context.store
        });
    }

    componentDidUpdate(prevProps) {
//        console.log('In ExecutePanel.componentDidUpdate this=',this,'prevProps=',prevProps);
        if (prevProps.type !== this.props.type) {
//            console.log('In ExecutePanel.componentDidUpdate prevProps.type=',prevProps.type,'props.type=',this.props.type);
            if (this.state.execute_name !== undefined) {
                stopExecute();
            }
        }
    }

    onCancel() {
//        console.log('In ExecutePanel.onCancel this=',this);
        this.setState({
            modal: !this.state.modal,
            prefix: '',
            steps: null,
            step: 0,
            title: '',
            text: '',
        });
    }

    onNext() {
//        console.log('In ExecutePanel.onNext this=',this);
        var next = this.state.step+1;
        if (this.state.steps[next] !== undefined) {
            const { store } = this.context;
            var design = store.getState();
            this.setState({
                // Put current store state into steps[next].state - remember this for "back" time travel
                steps: Object.assign([...this.state.steps], {[next]: Object.assign({}, this.state.steps[next], {state: design})}),
                step: next,
                title: this.state.steps[next].title,
                text: this.state.steps[next].text
            });
            if (this.state.steps[next].actions !== undefined) {
                this.state.steps[next].actions.forEach((action) => { store.dispatch(action); })
            }
       } else {
            this.setState({
                modal: !this.state.modal,
                prefix: '',
                steps: null,
                step: 0,
                title: '',
                text: ''
            });
        }
    }

    onBack() {
//        console.log('In ExecutePanel.onBack this=',this);
        var prev = this.state.step-1;
        if (prev < 0) prev = 0; // Stop going backwards if it is on the first step
        // Put steps[prev].state into current store state - that is, time travel back
        const { store } = this.context;
        store.dispatch(load(this.state.steps[prev].state));
        this.setState({
            step: prev,
            title: this.state.steps[prev].title,
            text: this.state.steps[prev].text
        });
        if (this.state.steps[prev].actions !== undefined) {
            this.state.steps[prev].actions.forEach((action) => { store.dispatch(action); })
        }
    }
    
    render() {
//        console.log('In ExecutePanel.render this=',this);
        return this.state.modal && (
            <Alert variant="success" style={{marginTop: '10px'}}>
                <Container>
                    <Row>
                        <div className="col-5 text-left align-middle pl-0">
                            <b>{this.state.prefix}{this.state.title !== undefined && this.state.title.length > 0 ? ' - ' + this.state.title : ''}</b>
                        </div>
                        <div className="col-7 text-left align-middle">
                            <Button className="float-right ml-1" variant="primary" onClick={this.onNext} disabled={this.state.steps[this.state.step+1] === undefined}>Next</Button>
                            <Button className="float-right ml-1" variant="secondary" onClick={this.onBack} disabled={this.state.step === 0}>Back</Button>
                            <Button className="float-right ml-1" variant="secondary" onClick={this.onCancel}>Exit</Button>
                        </div>
                        <hr/>
                    </Row>
                    <Row>
                        <div style={{marginTop: '10px'}}>
                            {this.state.text}
                        </div>
                    </Row>
                </Container>
            </Alert>
        );
    }
    
}

ExecutePanel.contextTypes = {
    store: PropTypes.object
};

const mapStateToProps = state => ({
    type: state.model.type,
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExecutePanel);
