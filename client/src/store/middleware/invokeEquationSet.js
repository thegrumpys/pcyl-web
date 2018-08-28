import { changeOutputSymbolValues } from '../actionCreators';
import { eqnset as pcyl_eqnset } from '../../designtypes/Piston-Cylinder/eqnset';
import { eqnset as solid_eqnset } from '../../designtypes/Solid/eqnset';
import { eqnset as spring_eqnset } from '../../designtypes/Spring/eqnset';

// Invoke Equation Set
export function invokeEquationSet(store) {
    
//    console.log('Entering invokeEquationSet');
    
    var element;

    var design = store.getState();
    
    // Loop to create p and x_in from symbol_table
    var p = [];
    var x = [];
    for (let i = 0; i < design.symbol_table.length; i++) {
        element = design.symbol_table[i];
        if (element.input) {
            p.push(element.value);
        } else {
            x.push(element.value);
        }
    }

    // Compute outputs x from inputs p using equations
    switch(design.type) {
    default:
    case 'Piston-Cylinder':
        x = pcyl_eqnset(p, x);
        break;
    case 'Solid':
        x = solid_eqnset(p, x);
        break;
    case 'Spring':
        x = spring_eqnset(p, x);
        break;
    }

    // Compute and dispatch output changes
    store.dispatch(changeOutputSymbolValues(x));
    
//    console.log('Exiting invokeEquationSet');
}
