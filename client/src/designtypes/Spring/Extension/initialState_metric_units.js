import { CONSTRAINED, FIXED, FDCL } from '../../../store/actionTypes';
export const initialState = {
    "symbol_table": [
        {
            "input": true,
            "name": "OD_Free",
            "value": 12.5,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 2.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Outside diameter in free (no load) condition",
            "equationset": true,
            "hidden": false
        },
        {
            "input": true,
            "name": "Wire_Dia",
            "value": 1.5,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0.5,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Wire diameter",
            "equationset": true,
            "hidden": false
        },
        {
            "input": true,
            "name": "Coils_T",
            "value": 29.5,
            "units": "coils",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 20,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Total number of coils",
            "equationset": true,
            "hidden": false
        },
        {
            "input": true,
            "name": "Initial_Tension",
            "value": 13.0,
            "units": "newtons",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Minimum force required to separate coils",
            "equationset": true,
            "hidden": false
        },
        {
            "input": true,
            "name": "End_Extension",
            "value": 0.0,
            "units": "mm",
            "lmin": FIXED,
            "lmax": FIXED,
            "cmin": 0,
            "cmax": 0.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "End Extension (see diagram in on-line Help)",
            "equationset": true,
            "hidden": false
        },
        {
            "input": true,
            "name": "Force_1",
            "value": 15.0,
            "units": "newtons",
            "lmin": CONSTRAINED|FDCL,
            "lmax": 0,
            "cmin": 3,
            "cmax": 6.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Minimum operating load (Length L_1) (FDCL)",
            "equationset": true,
            "hidden": false,
            "cminchoices": [ "Initial_Tension" ]
        },
        {
            "input": true,
            "name": "Force_2",
            "value": 67.0,
            "units": "newtons",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 50,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Maximum operating load (Length L_2)",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Mean_Dia",
            "value": 11.0,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.1,
            "cmax": 10.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Average of inside and outside coil diameters",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "ID_Free",
            "value": 9.5,
            "units": "mm",
            "lmin": CONSTRAINED,
            "lmax": 0,
            "cmin": 0.1,
            "cmax": 10.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Coil inside diameter in free (no load) condition",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Coils_A",
            "value": 29.9,
            "units": "coils",
            "lmin": CONSTRAINED,
            "lmax": CONSTRAINED,
            "cmin": 1.0,
            "cmax": 90.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Number of Active coils; includes End_Deflect_Allow",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Rate",
            "value": 1.26,
            "units": "N/mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 200.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Spring rate (spring constant); slope of force-deflection curve",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Deflect_1",
            "value": 1.58,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.0,
            "cmax": 20.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Deflection from free to load point 1",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Deflect_2",
            "value": 42.82,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 20.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Deflection from free to load point 2",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "L_Body",
            "value": 45.75,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 20.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Length of body in free condition (see diagram in on-line Help)",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "L_Free",
            "value": 64.75,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 20.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Free length including ends (see diagram in on-line Help)",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "L_1",
            "value": 66.33,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 100.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Spring length at load point 1",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "L_2",
            "value": 107.57,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 200.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Spring length at load point 2",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "L_Stroke",
            "value": 41.24,
            "units": "mm",
            "lmin": CONSTRAINED,
            "lmax": 0,
            "cmin": 0.050,
            "cmax": 100.0,
            "ioclass": 0,
            "sdlim": 0.1,
            "tooltip": "Length of stroke from point 1 to point 2",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Weight",
            "value": 15.11,
            "units": "grams",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.01,
            "cmax": 10.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Weight of one spring",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Spring_Index",
            "value": 7.33,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 4.0,
            "cmax": 10.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Ratio of mean coil diameter (Mean_Dia) to wire diameter (Wire_Dia)",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Initial",
            "value": 107.89,
            "units": "MPa",
            "lmin": CONSTRAINED|FDCL,
            "lmax": CONSTRAINED|FDCL,
            "cmin": 29,
            "cmax": 30,
            "ioclass": 0,
            "sdlim": 20.0,
            "tooltip": "Stress resulting from Initial_Tension (FDCL)",
            "equationset": true,
            "hidden": false,
            "cminchoices": [ "Stress_Init_Lo" ],
            "cmaxchoices": [ "Stress_Init_Hi" ]
        },
        {
            "input": false,
            "name": "Stress_1",
            "value": 149.67,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100.0,
            "cmax": 10000.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Torsion stress in wire at load point 1",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_2",
            "value": 668.56,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100.0,
            "cmax": 10000.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Torsion stress in wire at load point 2",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Hook",
            "value": 1275.8,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100.0,
            "cmax": 10000.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Bending stress in hooks",
            "equationset": true,
            "hidden": false,
            "cmaxchoices": [ "Stress_Lim_Bend" ]
        },
        {
            "input": false,
            "name": "FS_2",
            "value": 1.0,
            "units": "ratio",
            "lmin": CONSTRAINED,
            "lmax": CONSTRAINED,
            "cmin": 1.1,
            "cmax": 1.6,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Factor of safety at load point 2",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "FS_CycleLife",
            "value": 1.0,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.02,
            "cmax": 1.5,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Factor of safety to achieve the target cycle life category",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "FS_Hook",
            "value": 1.0,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 1.5,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Factor of safety in the hooks",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Cycle_Life",
            "value": 1.0,
            "units": "cycles",
            "lmin": 0,
            "lmax": 0,
            "cmin": 2.0,
            "cmax": 1000000.0,
            "ioclass": 0,
            "sdlim": 1000.0,
            "tooltip": "Rough estimate of the average number of cycles to failure",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "%_Safe_Deflect",
            "value": 80.0,
            "units": "%",
            "lmin": 0,
            "lmax": CONSTRAINED,
            "cmin": 0,
            "cmax": 90.0,
            "ioclass": 0,
            "sdlim": 0,
            "tooltip": "Deflection of load point 2 as a percent of total safe deflection",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Init_Lo",
            "value": 87.4,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100,
            "cmax": 10000.0,
            "ioclass": 0,
            "sdlim": 0,
            "tooltip": "Stress Initial range low point - sets lower limit for Initial_Tension",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Init_Hi",
            "value": 143.6,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100,
            "cmax": 10000.0,
            "ioclass": 0,
            "sdlim": 0,
            "tooltip": "Stress Initial range high point - sets upper limit for Initial_Tension",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "FS_SI_Lo",
            "value": 1.0,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 1.5,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Factor of safety for Stress Initial range low point",
            "equationset": true,
            "hidden": true
        },
        {
            "input": false,
            "name": "FS_SI_Hi",
            "value": 1.0,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 1.5,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Factor of safety for Stress Initial range high point",
            "equationset": true,
            "hidden": true
        },
        {
            "input": false,
            "name": "F1_IT_Margin",
            "value": 2.00,
            "units": "newtons",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 20,
            "ioclass": 0,
            "sdlim": 10.0,
            "tooltip": "Force_1 > Initial_Tension margin",
            "equationset": true,
            "hidden": true
        },
        {
            "input": false,
            "name": "Spring_Type",
            "value": "Extension",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Extension spring design",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Prop_Calc_Method",
            "value": 1,
            "units": "",
            "type": "table",
            "table": "Spring/Extension/prop_calc",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Property Calculation Method - Controls how material properties are determined and used.  1-Use values from material table  2-Specify Tensile, %_Tensile_Stat & %_Tensile_Endur  3-Specify allowable stresses: Stress_Lim_Stat & Stress_Lim_Endur",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Material_Type",
            "value": 3,
            "units": "",
            "type": "table",
            "table": "Spring/mat_SI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Select wire material",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "ASTM/Fed_Spec",
            "value": "Defined in initialState",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Wire specification",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Process",
            "value": "Cold_Coiled",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Coil winding process temperature - Cold coiled vs. Hot wound",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Catalog_Number",
            "value": "Defined in initialState ... -1?",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "equationset": false,
            "hidden": true
        },
        {
            "input": false,
            "name": "Material_File",
            "value": "mat_SI.json",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "equationset": false,
            "hidden": true
        },
        {
            "input": false,
            "name": "Life_Category",
            "value": 1,
            "units": "",
            "type": "table",
            "table": "Spring/Extension/lifetarget",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Select cycle life target. Selects %_Tensile_Endur from material table.",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "End_Type",
            "value": 3,
            "units": "",
            "type": "table",
            "table": "Spring/Extension/endtypes",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Select end type",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Inactive_Coils",
            "value": 0.0,
            "units": "coils",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Number of coils not contributing to deflection. Depends on End_Type.",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Density",
            "value": 0.00786,
            "units": "g/mm**3",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Wire material density",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Torsion_Modulus",
            "value": 79293.0,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Wire torsion modulus (G)",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Hot_Factor_Kh",
            "value": 1.0,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Reduction factor applied to modulus of hot-wound materials",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Tensile",
            "value": 950.3566,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Wire tensile strength (computed as a function of wire diameter when Prop_Calc_Method=1; See Help for details)",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "%_Tensile_Endur",
            "value": 50.0,
            "units": "%",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable percent of tensile strength for selected life cycle category",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "%_Tensile_Stat",
            "value": 50.0,
            "units": "%",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable percent of tensile strength for static applications",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "%_Tensile_Bend",
            "value": 75.0,
            "units": "%",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable percent of tensile strength for bending",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Lim_Endur",
            "value": 475.17,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable stress for selected life cycle category",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Lim_Stat",
            "value": 475.17,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable stress for static applications",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Lim_Bend",
            "value": 712.76,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable stress for bending",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "SI_Range",
            "value": 1,
            "units": "",
            "type": "table",
            "table": "Spring/Extension/si_range",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Select desired range of stress created by Initial_Tension. See on-line Help for details.",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "SI_Lo_Factor",
            "value": 188.92,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Stress Initial Low Factor from material table - used with Spring_Index to determine Stress_Init_Lo",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "SI_Hi_Factor",
            "value": 310.28,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Stress Initial High Factor from material table - used with Spring_Index to determine Stress_Init_Hi",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "End_ID",
            "value": 9.5,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "End Inside Diameter. Used in calculation of stress at end.",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Extended_End_ID",
            "value": 9.5,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Extended End Inside Diameter. Used in calculation of stress at end.",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "L_End",
            "value": 9.5,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Length of End (see diagram in on-line Help). Used in calculation of L_Free.",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "L_Extended_End",
            "value": 9.5,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Length of Extended End (see diagram in on-line Help). Used in calculation of L_Free.",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Hook_Deflect_All",
            "value": 0.40,
            "units": "coils",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Hook Deflection Allowance - adds to Coils_A",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "tbase010",
            "value": 0.254,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "equationset": false,
            "hidden": true
        },
        {
            "input": false,
            "name": "tbase400",
            "value": 10.160,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "equationset": false,
            "hidden": true
        },
        {
            "input": false,
            "name": "const_term",
            "value": 1.0,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "equationset": false,
            "hidden": true
        },
        {
            "input": false,
            "name": "slope_term",
            "value": 1.0,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "equationset": false,
            "hidden": true
        },
        {
            "input": false,
            "name": "tensile_010",
            "value": 1000.0,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "equationset": false,
            "hidden": true
        }
    ],
    "labels": [
        {
            "name": "COMMENT",
            "value": "Extension Spring default start point ... metric units"
        },
        {
            "name": "Contact person",
            "value": ""
        },
        {
            "name": "Company name",
            "value": ""
        },
        {
            "name": "Street",
            "value": ""
        },
        {
            "name": "City",
            "value": ""
        },
        {
            "name": "State & Zip",
            "value": ""
        },
        {
            "name": "Phone",
            "value": ""
        },
        {
            "name": "Date",
            "value": ""
        },
        {
            "name": "Part Number",
            "value": ""
        },
        {
            "name": "Finish",
            "value": ""
        }
    ],
    "name": "initialState",
    "type": "Spring/Extension",
    "version": "2",
    "result": {
        "objective_value": 0,
        "termination_condition": "",
        "violated_constraint_count": 0
    }
};
