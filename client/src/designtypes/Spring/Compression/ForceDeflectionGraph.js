import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, Label, ReferenceLine } from 'recharts';
import * as o from './symbol_table_offsets';

function CustomTooltip({ payload, label, active }) {
//    console.log('In ForceDeflectionGraph.CustomTooltip payload=',payload,'label=',label,'active=',active);
    if (active) {
        return (
            <div>
                <b>{`${payload[0].payload.title}`}</b><br/>
                {`Force: ${payload[0].payload.force}`}<br/>
                {`Deflection: ${payload[0].payload.deflection}`}
            </div>
        );
    }
    return null;
}

class ForceDeflectionGraph extends Component {

    render() {
//        console.log('In ForceDeflectionGraph.render this=', this);
        var data = [];
        data.push({ title: 'Free position', force: 0.0, deflection: 0.0 });
        data.push({ title: 'Position 1', force: this.props.symbol_table[o.Force_1].value, deflection: this.props.symbol_table[o.Deflect_1].value });
        data.push({ title: 'Position 2', force: this.props.symbol_table[o.Force_2].value, deflection: this.props.symbol_table[o.Deflect_2].value });
        data.push({ title: 'Solid position', force: this.props.symbol_table[o.Force_Solid].value, deflection: this.props.symbol_table[o.L_Free].value - this.props.symbol_table[o.L_Solid].value });
        return (
            <Container>
                <Row className="justify-content-lg-center">
                    <Col lg="4"><h2>Force-Deflection Graph</h2></Col>
                </Row>
                <Row>
                    <LineChart width={912}
                               height={912}
                               data={data}
                               margin={{ top: 50, right: 50, bottom: 50, left: 50 }}>
                        <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                        <XAxis dataKey="deflection" type="number"><Label value="Deflection" offset={0} position="bottom" /></XAxis>
                        <YAxis dataKey="force" type="number" domain={[0, dataMax => (Math.round(dataMax))]}><Label value="Force" angle={-90} position="left" /></YAxis>
                        <Tooltip content={<CustomTooltip />}/>
                        <Line type="linear" dataKey="force" stroke="#82ca9d" strokeWidth="3"/>
                        <ReferenceLine x={data[1].deflection} stroke="red" label="Deflect_1" strokeDasharray="3 3" />
                        <ReferenceLine y={data[1].force} stroke="red" label="Force_1" strokeDasharray="3 3" />
                        <ReferenceLine x={data[2].deflection} stroke="red" label="Deflect_2" strokeDasharray="3 3" />
                        <ReferenceLine y={data[2].force} stroke="red" label="Force_2" strokeDasharray="3 3" />
                    </LineChart>
                </Row>
            </Container>
        );
    }
    
}
const mapStateToProps = state => ({
    symbol_table: state.model.symbol_table,
    system_controls: state.model.system_controls,
    objective_value: state.model.result.objective_value
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ForceDeflectionGraph);
