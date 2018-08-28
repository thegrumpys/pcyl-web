INSERT INTO `design` (`id`, `name`, `type`, `value`) VALUES
(92, 'startup', 'Piston-Cylinder', '{"symbol_table":[{"input":true,"name":"PRESSURE","value":500,"units":"LB/SQ-IN","lmin":0,"lmax":1,"cmin":0,"cmax":1500,"ioclass":0,"sdlim":0,"tooltip":"Gas PRESSURE applied to piston AREA","equationset":true,"hidden":false,"smin":500,"vmax":-0.6666666666666666,"smax":1500},{"input":true,"name":"RADIUS","value":0.4,"units":"INCH","lmin":1,"lmax":1,"cmin":0,"cmax":0.5,"ioclass":0,"sdlim":0,"tooltip":"Piston dimension; creates AREA where PRESSURE is applied","equationset":true,"hidden":false,"vmin":-1,"vmax":-0.19999999999999996,"smin":0.4,"smax":0.5},{"input":true,"name":"THICKNESS","value":0.04,"units":"INCH","lmin":1,"lmax":1,"cmin":0,"cmax":0.05,"ioclass":0,"sdlim":0,"tooltip":"Dimension of cylinder wall providing containment for PRESSURE","equationset":true,"hidden":false,"vmin":-1,"vmax":-0.20000000000000004,"smin":0.04,"smax":0.05},{"input":false,"name":"FORCE","value":251.32741228718348,"units":"LBS.","lmin":1,"lmax":0,"cmin":1000,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Push generated by PRESSURE acting on piston AREA","equationset":true,"hidden":false,"vmin":0.7486725877128165,"smin":1000,"smax":251.32741228718348},{"input":false,"name":"AREA","value":0.5026548245743669,"units":"SQ.-IN.","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Effective amount of piston surface exposed to PRESSURE","equationset":true,"hidden":false,"smin":0.5026548245743669,"smax":0.5026548245743669},{"input":false,"name":"STRESS","value":2500,"units":"PSI","lmin":0,"lmax":1,"cmin":0,"cmax":3000,"ioclass":0,"sdlim":0,"tooltip":"Force per unit area within cylinder wall; created by PRESSURE","equationset":true,"hidden":false,"vmax":-0.16666666666666666,"smin":2500,"smax":3000}],"labels":[{"name":"COMMENT","value":"PCYL Default startup file ..."}],"version":"1","result":{"objective_value":0.5605106435926049,"termination_condition":"","violated_constraint_count":1},"system_controls":{"ioopt":3,"maxit":100,"weapon":1,"nmerit":1,"fix_wt":1.5,"con_wt":1,"zero_wt":10,"viol_wt":1,"mfn_wt":0.01,"objmin":0.00005,"del":1,"delmin":0.0001,"tol":0.0001,"smallnum":1e-7}}');
