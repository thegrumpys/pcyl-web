import { FIXED } from '../actionTypes';
import { changeInputSymbolValues, changeResultTerminationCondition } from '../actionCreators';
import { patsh } from './patsh';

// Search
export function search(store, objmin, merit) {
    
    var design = store.getState();
    
    // Compress P into PC
    var element;
    var pc = [];
    for (let i = 0; i < design.symbol_table.length; i++) {
        element = design.symbol_table[i];
        if (element.input) {
            if (element.equationset && !(element.lmin & FIXED)) {
                pc.push(element.value);
            }
        }
    }
    
    // Do the pattern search
    var delarg = design.system_controls.del;
    var ncode = patsh(pc, delarg, design.system_controls.delmin, objmin, design.system_controls.maxit, design.system_controls.tol, store, merit);
    
    // Expand PC back into store change actions
    var kd = 0;
    var p = [];
    for (let i = 0; i < design.symbol_table.length; i++) {
        element = design.symbol_table[i];
        if (element.input) {
            if (element.equationset && !(element.lmin & FIXED)) {
                p.push(pc[kd++]);
            } else {
                p.push(element.value);
            }
        }
    }
    store.dispatch(changeInputSymbolValues(p, merit));
    store.dispatch(changeResultTerminationCondition(ncode));
    
    design = store.getState();
    var obj = design.result.objective_value;
    return obj;
}
