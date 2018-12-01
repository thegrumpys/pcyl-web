INSERT INTO `design` (`name`, `type`, `value`) VALUES
('startup', 'Spring/Torsion', '{"symbol_table":[{"input":true,"name":"OD_Free","value":1.1,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":2,"ioclass":0,"sdlim":1,"tooltip":"Outside diameter in free (no load) condition","equationset":true,"hidden":false,"smin":1.1,"smax":2},{"input":true,"name":"Wire_Dia","value":0.1055,"units":"inch","lmin":0,"lmax":0,"cmin":0,"cmax":0.5,"ioclass":0,"sdlim":1,"tooltip":"Wire diameter","equationset":true,"hidden":false,"smin":1,"smax":1},{"input":true,"name":"L_Free","value":3.25,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":5,"ioclass":0,"sdlim":1,"tooltip":"Length in free (no load) condition","equationset":true,"hidden":false,"smin":3.25,"smax":5},{"input":true,"name":"Coils_T","value":10,"units":"coils","lmin":0,"lmax":0,"cmin":0,"cmax":20,"ioclass":0,"sdlim":1,"tooltip":"Total number of coils","equationset":true,"hidden":false,"smin":10,"smax":20},{"input":true,"name":"Force_1","value":1,"units":"pounds","lmin":0,"lmax":0,"cmin":0,"cmax":50,"ioclass":0,"sdlim":1,"tooltip":"Minimum operating load (Length L_1)","equationset":true,"hidden":false,"smin":1,"smax":50},{"input":true,"name":"Force_2","value":40,"units":"pounds","lmin":0,"lmax":0,"cmin":0,"cmax":50,"ioclass":0,"sdlim":1,"tooltip":"Maximum operating load (Length L_2)","equationset":true,"hidden":false,"smin":40,"smax":50},{"input":false,"name":"Mean_Dia","value":0.9945,"units":"inches","lmin":0,"lmax":0,"cmin":0.1,"cmax":10,"ioclass":0,"sdlim":1,"tooltip":"Average of inside and outside diameters","equationset":true,"hidden":false,"smin":1,"smax":10},{"input":false,"name":"Coils_A","value":8,"units":"coils","lmin":1,"lmax":1,"cmin":1,"cmax":40,"ioclass":0,"sdlim":1,"tooltip":"Number of Active coils","equationset":true,"hidden":false,"vmin":-7,"vmax":-0.8,"smin":1,"smax":40},{"input":false,"name":"Rate","value":22.631500150071364,"units":"Lb/In","lmin":0,"lmax":0,"cmin":1,"cmax":200,"ioclass":0,"sdlim":1,"tooltip":"Spring rate (spring constant); slope of force-deflection curve","equationset":true,"hidden":false,"smin":1,"smax":200},{"input":false,"name":"Deflect_1","value":0.04418620035653477,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":20,"ioclass":0,"sdlim":1,"tooltip":"Deflection from free to load point 1","equationset":true,"hidden":false,"vmin":-0.04418620035653477,"smin":1,"smax":20},{"input":false,"name":"Deflect_2","value":1.7674480142613909,"units":"inches","lmin":0,"lmax":0,"cmin":1,"cmax":20,"ioclass":0,"sdlim":1,"tooltip":"Deflection from free to load point 2","equationset":true,"hidden":false,"smin":1,"smax":20},{"input":false,"name":"L_1","value":3.2058137996434652,"units":"inches","lmin":0,"lmax":0,"cmin":1,"cmax":200,"ioclass":0,"sdlim":1,"tooltip":"Spring length at load point 1","equationset":true,"hidden":false,"smin":1,"smax":200},{"input":false,"name":"L_2","value":1.4825519857386091,"units":"inches","lmin":0,"lmax":0,"cmin":1,"cmax":100,"ioclass":0,"sdlim":1,"tooltip":"Spring length at load point 2","equationset":true,"hidden":false,"smin":1,"smax":100},{"input":false,"name":"L_Stroke","value":1.723261813904856,"units":"inches","lmin":1,"lmax":0,"cmin":0.05,"cmax":100,"ioclass":0,"sdlim":1,"tooltip":"Length of stroke from point 1 to point 2","equationset":true,"hidden":false,"vmin":-1.673261813904856,"smin":1,"smax":100},{"input":false,"name":"L_Solid","value":1.055,"units":"inches","lmin":0,"lmax":0,"cmin":1,"cmax":10,"ioclass":0,"sdlim":1,"tooltip":"Spring length when fully compressed","equationset":true,"hidden":false,"smin":1,"smax":10},{"input":false,"name":"Slenderness","value":3.2679738562091503,"units":"ratio","lmin":0,"lmax":0,"cmin":1,"cmax":10,"ioclass":0,"sdlim":1,"tooltip":"Ratio of free length (L_Free) to mean diameter (Mean_Dia)","equationset":true,"hidden":false,"smin":1,"smax":10},{"input":false,"name":"ID_Free","value":0.889,"units":"inches","lmin":1,"lmax":0,"cmin":0.1,"cmax":10,"ioclass":0,"sdlim":1,"tooltip":"Inside diameter in free (no load) condition","equationset":true,"hidden":false,"vmin":-0.789,"smin":1,"smax":10},{"input":false,"name":"Weight","value":0.07756535791658531,"units":"pounds","lmin":0,"lmax":0,"cmin":0.01,"cmax":10,"ioclass":0,"sdlim":1,"tooltip":"Weight of one spring","equationset":true,"hidden":false,"smin":1,"smax":10},{"input":false,"name":"Spring_Index","value":9.42654028436019,"units":"ratio","lmin":0,"lmax":0,"cmin":4,"cmax":10,"ioclass":0,"sdlim":1,"tooltip":"Ratio of mean coil diameter (Mean_Dia) to wire diameter (Wire_Dia)","equationset":true,"hidden":false,"smin":4,"smax":10},{"input":false,"name":"Force_Solid","value":49.67614282940665,"units":"pounds","lmin":0,"lmax":0,"cmin":4,"cmax":100,"ioclass":0,"sdlim":1,"tooltip":"Load required to fully compress the spring","equationset":true,"hidden":false,"smin":4,"smax":100},{"input":false,"name":"Stress_1","value":2489.349275531675,"units":"PSI","lmin":0,"lmax":0,"cmin":100,"cmax":10000,"ioclass":0,"sdlim":1,"tooltip":"Torsion stress in wire at load point 1","equationset":true,"hidden":false,"smin":100,"smax":10000},{"input":false,"name":"Stress_2","value":99573.971021267,"units":"PSI","lmin":0,"lmax":0,"cmin":100,"cmax":10000,"ioclass":0,"sdlim":1,"tooltip":"Torsion stress in wire at load point 2","equationset":true,"hidden":false,"smin":100,"smax":10000},{"input":false,"name":"Stress_Solid","value":123661.27016359147,"units":"PSI","lmin":0,"lmax":0,"cmin":100,"cmax":10000,"ioclass":0,"sdlim":1,"tooltip":"Torsion stress in wire when spring is fully compressed","equationset":true,"hidden":false,"smin":100,"smax":10000},{"input":false,"name":"FS_2","value":1.3126885502514634,"units":"ratio","lmin":1,"lmax":1,"cmin":1.02,"cmax":1.5,"ioclass":0,"sdlim":1,"tooltip":"Factor of safety at load point 2","equationset":true,"hidden":false,"vmin":-0.2869495590700621,"vmax":-0.12487429983235776,"smin":1.02,"smax":1.5},{"input":false,"name":"FS_Solid","value":1.0569971624080239,"units":"ratio","lmin":1,"lmax":0,"cmin":1,"cmax":1.5,"ioclass":0,"sdlim":1,"tooltip":"Factor of safety when the spring is fully compressed","equationset":true,"hidden":false,"vmin":-0.05699716240802388,"smin":1,"smax":1.5},{"input":false,"name":"FS_CycleLife","value":1.2580999778505957,"units":"ratio","lmin":0,"lmax":0,"cmin":1.02,"cmax":1.5,"ioclass":0,"sdlim":1,"tooltip":"Factor of safety to achieve the target cycle life category","equationset":true,"hidden":false,"smin":1.02,"smax":1.5},{"input":false,"name":"Cycle_Life","value":33266.99166385523,"units":"cycles","lmin":0,"lmax":0,"cmin":1.02,"cmax":1.5,"ioclass":0,"sdlim":1,"tooltip":"Rough estimate of the average number of cycles to failure","equationset":true,"hidden":false,"smin":1.02,"smax":1.5},{"input":false,"name":"%_Avail_Deflect","value":80.52154962466471,"units":"%","lmin":0,"lmax":1,"cmin":0,"cmax":90,"ioclass":0,"sdlim":0,"tooltip":"Deflection of load point 2 as a percent of total available deflection","equationset":true,"hidden":false,"vmax":-0.10531611528150317,"smin":80.52154962466471,"smax":90},{"input":false,"name":"Spring_Type","value":"Compression","units":"","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Compression spring design","equationset":false,"hidden":false,"smin":null,"smax":null},{"input":false,"name":"Material_Type","value":2,"units":"","type":"table","table":"mat_ips","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Select wire material","equationset":false,"hidden":false,"smin":2,"smax":2},{"input":false,"name":"ASTM/Fed_Spec","value":"A228/QQW-470","units":"","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Wire specification","equationset":false,"hidden":false,"smin":null,"smax":null},{"input":false,"name":"End_Type","value":4,"units":"","type":"table","table":"c_endtypes","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Select end type","equationset":false,"hidden":false,"smin":4,"smax":4},{"input":false,"name":"Catalog_Number","value":"Defined in initialState ... -1?","units":"","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"equationset":false,"hidden":false,"smin":null,"smax":null},{"input":false,"name":"Process","value":"Cold_Coiled","units":"","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Spring winding process temperature","equationset":false,"hidden":false,"smin":null,"smax":null},{"input":false,"name":"Material_File","value":"pass in name: mat_ips.json? ... -1?","units":"","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"equationset":false,"hidden":false,"smin":null,"smax":null},{"input":false,"name":"Dialog_Switch","value":-1,"units":"","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"equationset":false,"hidden":false,"smin":1,"smax":1},{"input":false,"name":"Prop_Calc_Method","value":1,"units":"","type":"table","table":"prop_calc","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Controls how material properties are determined","equationset":false,"hidden":false,"smin":1,"smax":1},{"input":false,"name":"End_Calc_Method","value":-1,"units":"","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"equationset":false,"hidden":false,"smin":1,"smax":1},{"input":false,"name":"Life_Category","value":1,"units":"","type":"table","table":"lifetarget","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Select cycle life target. Selects %_Tensile_Endur from material table.","equationset":false,"hidden":false,"smin":1,"smax":1},{"input":false,"name":"Material_Index","value":-1,"units":"index","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"equationset":false,"hidden":false,"smin":1,"smax":1},{"input":false,"name":"End_Type_Index","value":-1,"units":"index","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"equationset":false,"hidden":false,"smin":1,"smax":1},{"input":false,"name":"Inactive_Coils","value":2,"units":"coils","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Number of coils not contributing to deflection. Depends on End_Type.","equationset":false,"hidden":false,"smin":2,"smax":2},{"input":false,"name":"Add_Coils@Solid","value":0,"units":"coils","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Adjusts calculation of L_Solid. Depends on End_Type. See Help for details.","equationset":false,"hidden":false,"smin":1,"smax":1},{"input":false,"name":"Density","value":0.284,"units":"lb/cu-in","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Wire material density","equationset":false,"hidden":false,"smin":1,"smax":1},{"input":false,"name":"Torsion_Modulus","value":11500000,"units":"PSI","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Wire torsion modulus (G)","equationset":false,"hidden":false,"smin":11500000,"smax":11500000},{"input":false,"name":"Hot_Factor_Kh","value":1,"units":"ratio","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Reduction factor applied to modulus of hot-wound materials","equationset":false,"hidden":false,"smin":1,"smax":1},{"input":false,"name":"Tensile","value":261419.2233253764,"units":"PSI","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Wire tensile strength (computed as a function of wire diameter)","equationset":false,"hidden":false,"smin":261419.2233253764,"smax":261419.2233253764},{"input":false,"name":"%_Tensile_Endur","value":50,"units":"%","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Allowable percent of tensile strength for selected life cycle category","equationset":false,"hidden":false,"smin":50,"smax":50},{"input":false,"name":"%_Tensile_Stat","value":50,"units":"%","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Allowable percent of tensile strength for static applications","equationset":false,"hidden":false,"smin":50,"smax":50},{"input":false,"name":"unused","value":-1,"units":"","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"equationset":false,"hidden":false,"smin":1,"smax":1},{"input":false,"name":"Stress_Lim_Endur","value":130709.6116626882,"units":"PSI","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Allowable stress for selected life cycle category","equationset":false,"hidden":false,"smin":130709.6116626882,"smax":130709.6116626882},{"input":false,"name":"Stress_Lim_Stat","value":130709.6116626882,"units":"PSI","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"tooltip":"Allowable stress for static applications","equationset":false,"hidden":false,"smin":130709.6116626882,"smax":130709.6116626882},{"input":false,"name":"tbase010","value":0.01,"units":"","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"equationset":false,"hidden":true,"smin":1,"smax":1},{"input":false,"name":"tbase400","value":0.4,"units":"","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"equationset":false,"hidden":true,"smin":1,"smax":1},{"input":false,"name":"const_term","value":-2,"units":"","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"equationset":false,"hidden":true,"smin":2,"smax":2},{"input":false,"name":"slope_term","value":-106113.37959890341,"units":"","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"equationset":false,"hidden":true,"smin":106113.37959890341,"smax":106113.37959890341},{"input":false,"name":"tensile_010","value":370000,"units":"PSI","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":1,"equationset":false,"hidden":true,"smin":370000,"smax":370000}],"labels":[{"name":"COMMENT","value":"Compression Spring default startup file ..."},{"name":"Contact person","value":""},{"name":"Company name","value":""},{"name":"Street","value":""},{"name":"City","value":""},{"name":"State & Zip","value":""},{"name":"Phone","value":""},{"name":"Date","value":""},{"name":"Part Number","value":""},{"name":"Finish","value":""}],"version":"2","result":{"objective_value":0,"termination_condition":"","violated_constraint_count":0},"system_controls":{"ioopt":3,"maxit":100,"weapon":1,"nmerit":1,"fix_wt":1.5,"con_wt":1,"zero_wt":10,"viol_wt":1,"mfn_wt":0.01,"objmin":0.00005,"del":1,"delmin":0.0001,"tol":0.0001,"smallnum":1e-7}}');
