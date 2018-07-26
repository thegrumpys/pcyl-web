import { createStore, applyMiddleware } from 'redux';
import { pcylWebApp } from '../reducers';
import { initialState } from '../initialState';
import { equationsMiddleware } from '../equationsMiddleware';
import { 
    startup,
    changeDesignParameterValue, changeDesignParameterConstraint, setDesignParameterFlag, resetDesignParameterFlag, 
    changeStateVariableValue, changeStateVariableConstraint, setStateVariableFlag, resetStateVariableFlag, 
    changeSearchResultsObjectiveValue, 
    search } from '../actionCreators';
import { MIN, MAX } from '../actionTypes';
import { CONSTRAINED, FIXED } from '../globals';

//=====================================================================
// STARTUP
//=====================================================================

it('middleware with startup', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));
    
    var design = store.getState(); // before
    expect(design.design_parameters[0].name).toEqual("PRESSURE");
    expect(design.design_parameters[0].cmin).toEqual(0);
    expect(design.design_parameters[0].cmax).toEqual(1500);
    expect(design.design_parameters[0].smin).toEqual(0.06666666666666667);
    expect(design.design_parameters[0].smax).toEqual(1500);
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].cmin).toEqual(0);
    expect(design.design_parameters[1].cmax).toEqual(0.5);
    expect(design.design_parameters[1].smin).toEqual(0.4);
    expect(design.design_parameters[1].smax).toEqual(0.5);
    expect(design.design_parameters[2].name).toEqual("THICKNESS");
    expect(design.design_parameters[2].cmin).toEqual(0.0);
    expect(design.design_parameters[2].cmax).toEqual(0.05);
    expect(design.design_parameters[2].smin).toEqual(0.04);
    expect(design.design_parameters[2].smax).toEqual(0.05);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].cmin).toEqual(1000);
    expect(design.state_variables[0].cmax).toEqual(0);
    expect(design.state_variables[0].smin).toEqual(1000);
    expect(design.state_variables[0].smax).toEqual(0.06666666666666667);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].cmin).toEqual(0);
    expect(design.state_variables[1].cmax).toEqual(0);
    expect(design.state_variables[1].smin).toEqual(0.06666666666666667);
    expect(design.state_variables[1].smax).toEqual(0.06666666666666667);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].cmin).toEqual(0);
    expect(design.state_variables[2].cmax).toEqual(3000);
    expect(design.state_variables[2].smin).toEqual(0.06666666666666667);
    expect(design.state_variables[2].smax).toEqual(3000);
    
    store.dispatch(startup());
    
    
    var design = store.getState(); // after
//  value=500, level=1500, sdlimit=0, status=1, stemp=1500
    expect(design.design_parameters[0].name).toEqual("PRESSURE");
    expect(design.design_parameters[0].cmin).toEqual(0);
    expect(design.design_parameters[0].cmax).toEqual(1500);
    expect(design.design_parameters[0].smin).toEqual(500); // updated
    expect(design.design_parameters[0].smax).toEqual(1500);
//  value=0.4, level=0, sdlimit=0, status=1, stemp=0.4
//  value=0.4, level=0.5, sdlimit=0, status=1, stemp=0.5
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].cmin).toEqual(0);
    expect(design.design_parameters[1].cmax).toEqual(0.5);
    expect(design.design_parameters[1].smin).toEqual(0.4);
    expect(design.design_parameters[1].smax).toEqual(0.5);
//  value=0.04, level=0, sdlimit=0, status=1, stemp=0.04
//  value=0.04, level=0.05, sdlimit=0, status=1, stemp=0.05
    expect(design.design_parameters[2].name).toEqual("THICKNESS");
    expect(design.design_parameters[2].cmin).toEqual(0.0);
    expect(design.design_parameters[2].cmax).toEqual(0.05);
    expect(design.design_parameters[2].smin).toEqual(0.04);
    expect(design.design_parameters[2].smax).toEqual(0.05);
//  value=251.32741228718348, level=1000, sdlimit=0, status=1, stemp=1000
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].cmin).toEqual(1000);
    expect(design.state_variables[0].cmax).toEqual(0);
    expect(design.state_variables[0].smin).toEqual(1000);
    expect(design.state_variables[0].smax).toEqual(251.32741228718348); // updated
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].cmin).toEqual(0);
    expect(design.state_variables[1].cmax).toEqual(0);
    expect(design.state_variables[1].smin).toEqual(0.5026548245743669); // updated
    expect(design.state_variables[1].smax).toEqual(0.5026548245743669); // updated
//  value=2500, level=3000, sdlimit=0, status=1, stemp=3000
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].cmin).toEqual(0);
    expect(design.state_variables[2].cmax).toEqual(3000);
    expect(design.state_variables[2].smin).toEqual(2500); // updated
    expect(design.state_variables[2].smax).toEqual(3000);
});

//=====================================================================
// DESIGN PARAMETERS
//=====================================================================

it('middleware change pressure design parameter value without startup', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));
    
    var design = store.getState(); // before
    expect(design.design_parameters[0].name).toEqual("PRESSURE");
    expect(design.design_parameters[0].value).toEqual(500);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(251.32741228718348);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(0.5026548245743669);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(2500);

    store.dispatch(changeDesignParameterValue("PRESSURE", 5000));
    
    design = store.getState(); // after
    expect(design.design_parameters[0].name).toEqual("PRESSURE");
    expect(design.design_parameters[0].value).toEqual(5000);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(2513.2741228718348);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(0.5026548245743669);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(25000);
});

it('middleware change radius design parameter value without startup', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));
    
    var design = store.getState(); // before
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].value).toEqual(0.4);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(251.32741228718348);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(0.5026548245743669);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(2500);

    store.dispatch(changeDesignParameterValue("RADIUS", 0.5));
    
    design = store.getState(); // after
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].value).toEqual(0.5);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(392.6990816987241);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(0.7853981633974483);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(3125);
});

it('middleware change thickness design parameter value without startup', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));
    
    var design = store.getState(); // before
    expect(design.design_parameters[2].name).toEqual("THICKNESS");
    expect(design.design_parameters[2].value).toEqual(0.04);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(251.32741228718348);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(0.5026548245743669);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(2500);

    store.dispatch(changeDesignParameterValue("THICKNESS", 0.05));
    
    design = store.getState(); // after
    expect(design.design_parameters[2].name).toEqual("THICKNESS");
    expect(design.design_parameters[2].value).toEqual(0.05);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(251.32741228718348);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(0.5026548245743669);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(2000);
});
//=====================================================================
// CONSTRAINTS
//=====================================================================

it('middleware change constraints to force all violations', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));
    
    var design = store.getState(); // before
    expect(design.design_parameters[0].name).toEqual("PRESSURE");
    expect(design.design_parameters[0].cmin).toEqual(0);
    expect(design.design_parameters[0].cmax).toEqual(1500);
    expect(design.design_parameters[0].smin).toEqual(0.06666666666666667);
    expect(design.design_parameters[0].smax).toEqual(1500);
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].cmin).toEqual(0);
    expect(design.design_parameters[1].cmax).toEqual(0.5);
    expect(design.design_parameters[1].smin).toEqual(0.4);
    expect(design.design_parameters[1].smax).toEqual(0.5);
    expect(design.design_parameters[2].name).toEqual("THICKNESS");
    expect(design.design_parameters[2].cmin).toEqual(0.0);
    expect(design.design_parameters[2].cmax).toEqual(0.05);
    expect(design.design_parameters[2].smin).toEqual(0.04);
    expect(design.design_parameters[2].smax).toEqual(0.05);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].cmin).toEqual(1000);
    expect(design.state_variables[0].cmax).toEqual(0);
    expect(design.state_variables[0].smin).toEqual(1000);
    expect(design.state_variables[0].smax).toEqual(0.06666666666666667);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].cmin).toEqual(0);
    expect(design.state_variables[1].cmax).toEqual(0);
    expect(design.state_variables[1].smin).toEqual(0.06666666666666667);
    expect(design.state_variables[1].smax).toEqual(0.06666666666666667);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].cmin).toEqual(0);
    expect(design.state_variables[2].cmax).toEqual(3000);
    expect(design.state_variables[2].smin).toEqual(0.06666666666666667);
    expect(design.state_variables[2].smax).toEqual(3000);
    
    // Set all constraints to cause violations
    store.dispatch(changeDesignParameterConstraint("PRESSURE", MIN,600));
    store.dispatch(changeDesignParameterConstraint("RADIUS", MIN, 0.5));
    store.dispatch(changeDesignParameterConstraint("THICKNESS", MIN, 0.05));
    store.dispatch(changeStateVariableConstraint("FORCE", MIN, 10000));
    store.dispatch(changeStateVariableConstraint("AREA", MIN, 0.5));
    store.dispatch(changeStateVariableConstraint("STRESS", MIN, 3000));

    store.dispatch(changeDesignParameterConstraint("PRESSURE", MAX, 400));
    store.dispatch(changeDesignParameterConstraint("RADIUS", MAX, 0.3));
    store.dispatch(changeDesignParameterConstraint("THICKNESS", MAX, 0.03));
    store.dispatch(changeStateVariableConstraint("FORCE", MAX, -10000));
    store.dispatch(changeStateVariableConstraint("AREA", MAX, 0.4));
    store.dispatch(changeStateVariableConstraint("STRESS", MAX, 2000));

    // Reset all flags
    store.dispatch(resetDesignParameterFlag("PRESSURE", MIN, FIXED|CONSTRAINED));
    store.dispatch(resetDesignParameterFlag("RADIUS", MIN, FIXED|CONSTRAINED));
    store.dispatch(resetDesignParameterFlag("THICKNESS", MIN, FIXED|CONSTRAINED));
    store.dispatch(resetStateVariableFlag("FORCE", MIN, FIXED|CONSTRAINED));
    store.dispatch(resetStateVariableFlag("AREA", MIN, FIXED|CONSTRAINED));
    store.dispatch(resetStateVariableFlag("STRESS", MIN, FIXED|CONSTRAINED));

    store.dispatch(resetDesignParameterFlag("PRESSURE", MAX, FIXED|CONSTRAINED));
    store.dispatch(resetDesignParameterFlag("RADIUS", MAX, FIXED|CONSTRAINED));
    store.dispatch(resetDesignParameterFlag("THICKNESS", MAX, FIXED|CONSTRAINED));
    store.dispatch(resetStateVariableFlag("FORCE", MAX, FIXED|CONSTRAINED));
    store.dispatch(resetStateVariableFlag("AREA", MAX, FIXED|CONSTRAINED));
    store.dispatch(resetStateVariableFlag("STRESS", MAX, FIXED|CONSTRAINED));

    // Set all flags
    store.dispatch(setDesignParameterFlag("PRESSURE", MIN, FIXED|CONSTRAINED));
    store.dispatch(setDesignParameterFlag("RADIUS", MIN, FIXED|CONSTRAINED));
    store.dispatch(setDesignParameterFlag("THICKNESS", MIN, FIXED|CONSTRAINED));
    store.dispatch(setStateVariableFlag("FORCE", MIN, FIXED|CONSTRAINED));
    store.dispatch(setStateVariableFlag("AREA", MIN, FIXED|CONSTRAINED));
    store.dispatch(setStateVariableFlag("STRESS", MIN, FIXED|CONSTRAINED));

    store.dispatch(setDesignParameterFlag("PRESSURE", MAX, FIXED|CONSTRAINED));
    store.dispatch(setDesignParameterFlag("RADIUS", MAX, FIXED|CONSTRAINED));
    store.dispatch(setDesignParameterFlag("THICKNESS", MAX, FIXED|CONSTRAINED));
    store.dispatch(setStateVariableFlag("FORCE", MAX, FIXED|CONSTRAINED));
    store.dispatch(setStateVariableFlag("AREA", MAX, FIXED|CONSTRAINED));
    store.dispatch(setStateVariableFlag("STRESS", MAX, FIXED|CONSTRAINED));
});

//=====================================================================
// SEARCH
//=====================================================================

it('middleware search1 from initial state', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));
    
    store.dispatch(search());
    
    var design = store.getState(); // after
    expect(design.design_parameters[0].name).toEqual("PRESSURE");
    expect(design.design_parameters[0].value).toEqual(697.2108757363197);
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].value).toEqual(0.5825642374486647);
    expect(design.design_parameters[2].name).toEqual("THICKNESS");
    expect(design.design_parameters[2].value).toEqual(0.05814850143495808);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(743.3642427191874);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(1.0661971414805103);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(3492.524417147412);
    expect(design.search_results.objective_value).toEqual(0.14664192222304165);
    expect(design.search_results.termination_condition).toEqual("DELMIN 12 ITER.");
    expect(design.search_results.violated_constraint_count).toEqual(4);
});

it('middleware search2 from modified initial state', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));

    store.dispatch(changeStateVariableConstraint("STRESS", MAX, 10000));
    
    store.dispatch(search());
    
    var design = store.getState(); // after
    expect(design.design_parameters[0].name).toEqual("PRESSURE");
    expect(design.design_parameters[0].value).toEqual(1389.1186225065448);
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].value).toEqual(0.4877369775989805);
    expect(design.design_parameters[2].name).toEqual("THICKNESS");
    expect(design.design_parameters[2].value).toEqual(0.040000000000000056);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(1038.1511075527435);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(0.7473451804133828);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(8469.056480847505);
    expect(design.search_results.objective_value).toEqual(0.0);
    expect(design.search_results.termination_condition).toEqual("OBJMIN 7 ITER.");
    expect(design.search_results.violated_constraint_count).toEqual(0);
});

it('middleware search3 from modified initial state', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));

    store.dispatch(changeDesignParameterValue("RADIUS", 0.444));
    store.dispatch(setDesignParameterFlag("RADIUS", MIN, FIXED));
    
    store.dispatch(search());
    
    var design = store.getState(); // after
    expect(design.design_parameters[0].name).toEqual("PRESSURE");
    expect(design.design_parameters[0].value).toEqual(972.4279315207291);
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].value).toEqual(0.444);
    expect(design.design_parameters[2].name).toEqual("THICKNESS");
    expect(design.design_parameters[2].value).toEqual(0.06000128769964651);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(602.2450480774055);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(0.6193210093580775);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(3597.9061295858437);
    expect(design.search_results.objective_value).toEqual(0.2379406084611994);
    expect(design.search_results.termination_condition).toEqual("DELMIN 9 ITER.");
    expect(design.search_results.violated_constraint_count).toEqual(3);
});

it('middleware search4 from modified initial state', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));

    store.dispatch(setStateVariableFlag("STRESS", MIN, FIXED|CONSTRAINED));
    store.dispatch(setStateVariableFlag("STRESS", MAX, FIXED|CONSTRAINED));
    store.dispatch(changeStateVariableConstraint("STRESS", MIN, 3500));
    store.dispatch(changeStateVariableConstraint("STRESS", MAX, 3500));
    
    store.dispatch(search());
    
    var design = store.getState(); // after
    expect(design.design_parameters[0].name).toEqual("PRESSURE");
    expect(design.design_parameters[0].value).toEqual(750.4968399919907);
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].value).toEqual(0.5744582590062994);
    expect(design.design_parameters[2].name).toEqual("THICKNESS");
    expect(design.design_parameters[2].value).toEqual(0.05745198212666806);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(778.0646709106514);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(1.0367327741432661);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(3752.0821052003944);
    expect(design.search_results.objective_value).toEqual(0.10531583651535117);
    expect(design.search_results.termination_condition).toEqual("DELMIN 15 ITER.");
    expect(design.search_results.violated_constraint_count).toEqual(4);
});

it('middleware search5 from modified initial state', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));

    store.dispatch(changeStateVariableConstraint("FORCE", MIN, 1200));
    store.dispatch(changeDesignParameterConstraint("RADIUS", MAX, 0.4));
    store.dispatch(changeStateVariableConstraint("STRESS", MAX, 3200));
    
    store.dispatch(search());
    
    var design = store.getState(); // after
    expect(design.design_parameters[0].name).toEqual("PRESSURE");
    expect(design.design_parameters[0].value).toEqual(962.044187410488);
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].value).toEqual(0.47955021080064064);
    expect(design.design_parameters[2].name).toEqual("THICKNESS");
    expect(design.design_parameters[2].value).toEqual(0.05993925712603883);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(695.0452267187616);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(0.7224670506971189);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(3848.4668895888885);
    expect(design.search_results.objective_value).toEqual(0.29720134447532803);
    expect(design.search_results.termination_condition).toEqual("DELMIN 8 ITER.");
    expect(design.search_results.violated_constraint_count).toEqual(4);
});

it('middleware search6 from modified initial state', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));

    store.dispatch(changeStateVariableConstraint("FORCE", MIN, 2500));
    store.dispatch(changeDesignParameterConstraint("RADIUS", MAX, 0.55));
    store.dispatch(changeStateVariableConstraint("STRESS", MAX, 3400));
    
    store.dispatch(search());
    
    var design = store.getState(); // after
    expect(design.design_parameters[0].name).toEqual("PRESSURE");
    expect(design.design_parameters[0].value).toEqual(747.1742312566108);
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].value).toEqual(0.6601769508494637);
    expect(design.design_parameters[2].name).toEqual("THICKNESS");
    expect(design.design_parameters[2].value).toEqual(0.06031483281717521);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(1023.0396666167936);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(1.3692116561571288);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(4089.103647517854);
    expect(design.search_results.objective_value).toEqual(0.47279118427044764);
    expect(design.search_results.termination_condition).toEqual("DELMIN 13 ITER.");
    expect(design.search_results.violated_constraint_count).toEqual(4);
});

it('middleware search7 from modified initial state', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));

    store.dispatch(changeStateVariableConstraint("FORCE", MIN, 2500));
    store.dispatch(changeDesignParameterConstraint("RADIUS", MAX, 0.55));
    store.dispatch(setStateVariableFlag("STRESS", MIN, FIXED|CONSTRAINED));
    store.dispatch(setStateVariableFlag("STRESS", MAX, FIXED|CONSTRAINED));
    store.dispatch(changeStateVariableConstraint("STRESS", MIN, 3800));
    store.dispatch(changeStateVariableConstraint("STRESS", MAX, 3800));
    
    store.dispatch(search());
    
    var design = store.getState(); // after
    expect(design.design_parameters[0].name).toEqual("PRESSURE");
    expect(design.design_parameters[0].value).toEqual(766.5319070212193);
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].value).toEqual(0.6599935713499682);
    expect(design.design_parameters[2].name).toEqual("THICKNESS");
    expect(design.design_parameters[2].value).toEqual(0.06041228804212965);
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].value).toEqual(1048.9614321530885);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(1.3684511010499278);
    expect(design.state_variables[2].name).toEqual("STRESS");
    expect(design.state_variables[2].value).toEqual(4187.112814828608);
    expect(design.search_results.objective_value).toEqual(0.44359387986703586);
    expect(design.search_results.termination_condition).toEqual("DELMIN 16 ITER.");
    expect(design.search_results.violated_constraint_count).toEqual(4);
});
