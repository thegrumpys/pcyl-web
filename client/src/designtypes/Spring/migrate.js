import { displayError } from '../../components/ErrorModal';
import { initialState } from './initialState';
import { initialSystemControls } from '../../initialSystemControls';

export function migrate(design) {
    /*
     * When doing a migration also update client's initialState and set its version to the new one.
     * Also update server's load.sql and set its version to the new one.
     */
//    console.log('In migrate design=',design);

    var migrated_design = design; // Assume no-op as default 

    /* eslint-disable no-fallthrough */
//    console.log('In migrate design.version=',design.version);
    switch(design.version) {
    case "1":
        // Current model version
         console.log('Convert from 1 to 2');
         design.subproblems = [];
         design.subproblems.push({
                 name: 'test',
                 number: 0,
                 mask: 1
         });
         design.constants.forEach((constant) => {
             constant.subproblems = 0xffffffff; // default is member of all subproblems
             if (constant.ioclass !== undefined) {
                 delete constant.ioclass; // Toss old ioclass if it exists
             }
         });
         design.design_parameters.forEach((design_parameter) => {
             design_parameter.subproblems = 0xffffffff; // default is member of all subproblems
             if (design_parameter.ioclass !== undefined) {
                 delete design_parameter.ioclass; // Toss old ioclass if it exists
             }
         });
         design.state_variables.forEach((state_variable) => {
             state_variable.subproblems = 0xffffffff; // default is member of all subproblems
             if (state_variable.ioclass !== undefined) {
                 delete state_variable.ioclass; // Toss old ioclass if it exists
             }
         });
         migrated_design.version = "2"; // last thing... set the migrated model version
        break;
    case "2":
        // Current model version
        // console.log('Convert from 1 to 2');
        // To be defined - presently do nothing
        // migrated_design.version = "2"; // last thing... set the migrated model version
        break;
    default: // Unknown
        displayError('Unknown model version:\''+design.version+'\'. Using builtin initial state instead.');
        migrated_design = Object.assign({}, initialState, { system_controls: initialSystemControls }); // Merge initialState and initialSystemControls
    }
//    console.log('In migrate migrated_design.version=',migrated_design.version);
    /* eslint-enable */
    
//    console.log('In migrate migrated_design=',migrated_design);
    return migrated_design;
}
