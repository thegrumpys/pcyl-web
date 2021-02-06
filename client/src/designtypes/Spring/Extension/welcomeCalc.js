import React from 'react';
import { changeSymbolValue, loadInitialState, changeLabelsValue, saveAutoSave } from '../../../store/actionCreators';
export const execute = {
    steps: [
        {
            title: "Session Now In Progress",
            text: (
                <React.Fragment>
                    <p>
                    Welcome to the ODOP:Spring web app!
                    Calculator view is below. 
                    </p>
                    
                    <p>
                    The white entry fields below are inputs to the Calculator.
                    As input values are entered, calculation results appear in the light gray fields.
                    The existing values are an arbitrary starting point. 
                    Modify them to meet your requirements. 
                    </p>

                    <p>
                    Push the blue "Next" button in the upper right to show the next page of instructions, hints and tips. 
                    Push the darker gray "Exit" button to close this light green panel. 
                    </p>
                    <br />
                </React.Fragment>
            ),
            actions: [
                saveAutoSave(),
//                                       Expect to re-enable NaN in future release
//                                       "NaN" (Not a Number) may appear if inputs are not complete.
//                changeSymbolValue("OD_Free", Number.NaN),
//                changeSymbolValue("Wire_Dia", Number.NaN),
//                changeSymbolValue("L_Free", Number.NaN),
//                changeSymbolValue("Coils_T", Number.NaN),
//                changeSymbolValue("Force_1", Number.NaN),
//                changeSymbolValue("Force_2", Number.NaN),
            ]
        },
        {
            title: "Page 02 of 04",
            text: (
                <React.Fragment>
                    <p>
                    The ODOP:Spring Calculator view is based on applied load.
                    Forces are calculation inputs. Deflections are outputs. 
                    Alternative calculation approaches are supported by other views.
                    Use the <b>View</b> menu above to switch views.
                    </p>
                    
                    <p>
                    The multi-colored Feasibility Status indicator provides feedback on the viability of the current design.
                    For more information about design feasibility and about the Feasibility Status indicator, follow the links: 
                    &nbsp;<a href="https://www.springdesignsoftware.org/odop/docs/Help/feasibility" target="_blank" rel="noopener noreferrer">Feasiblity</a>,&nbsp; 
                    &nbsp;<a href="https://www.springdesignsoftware.org/odop/docs/Help/designSituations" target="_blank" rel="noopener noreferrer">Design Situations</a>&nbsp; and 
                    &nbsp;<a href="https://www.springdesignsoftware.org/odop/docs/Help/terminology#feasibleRegion" target="_blank" rel="noopener noreferrer">Feasible Region</a>.&nbsp; 
                    </p>
                    
                    <p>
                    Right click (long press a touch screen) on a darker numeric value to control FIX / FREE status and to establish or modify constraints. 
                    FIXed status causes the ODOP Search feature (<b>Action : Search</b> menu) to achieve or hold a specified value.
                    FREE status allows Search to manipulate the variable to achieve a feasible design.
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 03 of 04",
            text: (
                <React.Fragment>
                    <p>
                    The Wire_Dia field of Calculator view provides a list of commonly available wire diameters 
                    that depends on the selected Material_Type and units (U.S., metric). 
                    Choose a standard wire diameter by selecting the Wire_Dia input field and scrolling to the desired value. 
                    After selection the value is automatically marked with FIXed status so that it is not manipulated by Search.
                    </p>
                    
                    <p>
                    Tooltips are available for many elements of the Calculator view.
                    Hover the cursor (tap a touch screen) to learn about these elements.
                    Additional insights are available in the on-line Help plus Tutorial and Demo sessions.
                    </p>
                    <br />
                </React.Fragment>
            )
        },
        {
            title: "Page 04 of 04 (last page)",
            text: (
                <React.Fragment>
                    <p>
                    The <b>File : Open</b> menu above provides the ability to open existing designs of 
                    supported spring types (compression, extension & torsion) and units (U.S., metric). 
                    These system-provided designs can be a starting point for new custom designs. 
                   </p>
                    
                    <p>
                    In summary: 
                    <br />
                    Enter input values in the white fields.
                    Be sure to select appropriate values for Material_Type, End_Type and Wire_Dia.
                    View the corresponding Calculator outputs.
                    Switch to other views to utilize additional capabilities of ODOP:Spring.
                    Push the gray "Exit" button in the upper right to close this light green panel.
                   </p>
                    
                    <p>
                    We welcome your feedback.  
                    &nbsp;<a href="https://www.springdesignsoftware.org/odop/docs/About/ContactUs" target="_blank" rel="noopener noreferrer">Contact Us.</a>&nbsp; 
                    </p>
                </React.Fragment>
            )
        }
    ]
}