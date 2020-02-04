INSERT INTO `design` (`created_at`, `updated_at`, `user`, `type`, `name`, `value`) VALUES
('2018-10-16 23:57:20', '2018-12-02 21:07:15', NULL, 'Solid', 'Startup', '{"symbol_table":[{"input":true,"name":"Length","value":12,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"Longest dimension","equationset":true,"hidden":false,"smin":12,"smax":100,"vmin":-1},{"input":true,"name":"Width","value":10,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":80,"ioclass":0,"sdlim":0,"tooltip":"Width dimension","equationset":true,"hidden":false,"smin":10,"smax":80,"vmin":-1},{"input":true,"name":"Height","value":8,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":60,"ioclass":0,"sdlim":0,"tooltip":"Shortest dimension","equationset":true,"hidden":false,"smin":8,"smax":60,"vmin":-1},{"input":true,"name":"Material","value":6,"units":"","type":"table","table":"Solid/materials","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Select from list","equationset":false,"hidden":false},{"input":true,"name":"Density","value":0.036,"units":"lb/cu-in","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Weight per unit volume of the selected material","equationset":false,"hidden":false},{"input":false,"name":"Volume","value":960,"units":"cu-in","lmin":0,"lmax":0,"cmin":1,"cmax":1200,"ioclass":0,"sdlim":0,"tooltip":"Three-dimensional space enclosed","equationset":true,"hidden":false,"smin":1,"smax":1200},{"input":false,"name":"Surface Area","value":592,"units":"sq-in","lmin":0,"lmax":0,"cmin":0,"cmax":900,"ioclass":0,"sdlim":0,"tooltip":"Sum of the area of the surfaces","equationset":true,"hidden":false,"smin":592,"smax":900},{"input":false,"name":"VolToSurfArea","value":1.6216216216216217,"units":"ratio","lmin":0,"lmax":0,"cmin":0,"cmax":10,"ioclass":0,"sdlim":0,"tooltip":"Computed ratio of volume to surface area","equationset":true,"hidden":false,"smin":1.6216216216216217,"smax":10},{"input":false,"name":"Girth","value":36,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"Perimeter around width and height dimensions","equationset":true,"hidden":false,"smin":36,"smax":100},{"input":false,"name":"Length+Girth","value":48,"units":"inches","lmin":0,"lmax":1,"cmin":0,"cmax":108,"ioclass":0,"sdlim":0,"tooltip":"Sum of length and girth dimensions. Shippers limit to 108 in.","equationset":true,"hidden":false,"smin":48,"smax":108,"vmax":-0.5555555555555556},{"input":false,"name":"Diagonal","value":17.549928774784245,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"3D distance from corner to furthest corner","equationset":true,"hidden":false,"smin":17.549928774784245,"smax":100},{"input":false,"name":"Weight","value":34.559999999999995,"units":"lb","lmin":0,"lmax":1,"cmin":0,"cmax":70,"ioclass":0,"sdlim":0,"tooltip":"Volume times Density of the selected material. Shippers limit to 70 Lb.","equationset":true,"hidden":false,"smin":34.559999999999995,"smax":70,"vmax":-0.5062857142857143}],"labels":[{"name":"COMMENT","value":"Rectangular Solid default Startup file ..."}],"version":"5","result":{"objective_value":0,"termination_condition":"","violated_constraint_count":0},"system_controls":{"ioopt":3,"maxit":100,"weapon":1,"nmerit":1,"fix_wt":1.5,"con_wt":1,"zero_wt":10,"viol_wt":1,"mfn_wt":0.01,"objmin":0.00005,"del":1,"delmin":0.0001,"tol":0.0001,"smallnum":1e-7,"show_violations":1}}'),
('2018-12-03 17:54:05', '2018-12-03 17:59:02', NULL, 'Solid', 'USPS_MaxVolume', '{"symbol_table":[{"input":true,"name":"Length","value":36,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"Longest dimension","equationset":true,"hidden":false,"smin":36,"smax":100,"vmin":-1},{"input":true,"name":"Width","value":18,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":80,"ioclass":0,"sdlim":0,"tooltip":"Width dimension","equationset":true,"hidden":false,"smin":18,"smax":80,"vmin":-1},{"input":true,"name":"Height","value":18,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":60,"ioclass":0,"sdlim":0,"tooltip":"Shortest dimension","equationset":true,"hidden":false,"smin":18,"smax":60,"vmin":-1},{"input":true,"name":"Material","value":3,"units":"","type":"table","table":"Solid/materials","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Select from list","equationset":false,"hidden":false},{"input":true,"name":"Density","value":0.00004334,"units":"lb/cu-in","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Weight per unit volume of the selected material","equationset":false,"hidden":false},{"input":false,"name":"Volume","value":11664,"units":"cu-in","lmin":0,"lmax":0,"cmin":1,"cmax":1200,"ioclass":0,"sdlim":0,"tooltip":"Three-dimensional space enclosed","equationset":true,"hidden":false,"smin":1,"smax":1200},{"input":false,"name":"Surface Area","value":3240,"units":"sq-in","lmin":0,"lmax":0,"cmin":0,"cmax":900,"ioclass":0,"sdlim":0,"tooltip":"Sum of the area of the surfaces","equationset":true,"hidden":false,"smin":3240,"smax":900},{"input":false,"name":"VolToSurfArea","value":3.6,"units":"ratio","lmin":0,"lmax":0,"cmin":0,"cmax":10,"ioclass":0,"sdlim":0,"tooltip":"Computed ratio of volume to surface area","equationset":true,"hidden":false,"smin":3.6,"smax":10},{"input":false,"name":"Girth","value":72,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"Perimeter around width and height dimensions","equationset":true,"hidden":false,"smin":72,"smax":100},{"input":false,"name":"Length+Girth","value":108,"units":"inches","lmin":0,"lmax":1,"cmin":0,"cmax":108,"ioclass":0,"sdlim":0,"tooltip":"Sum of length and girth dimensions. Shippers limit to 108 in.","equationset":true,"hidden":false,"smin":108,"smax":108,"vmax":0},{"input":false,"name":"Diagonal","value":44.090815370097204,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"3D distance from corner to furthest corner","equationset":true,"hidden":false,"smin":44.090815370097204,"smax":100},{"input":false,"name":"Weight","value":0.50551776,"units":"lb","lmin":0,"lmax":1,"cmin":0,"cmax":70,"ioclass":0,"sdlim":0,"tooltip":"Volume times Density of the selected material. Shippers limit to 70 Lb.","equationset":true,"hidden":false,"smin":0.50551776,"smax":70,"vmax":-0.9927783177142857}],"labels":[{"name":"COMMENT","value":"USPS maximum volume given max 108 inches length + girth "}],"version":"5","result":{"objective_value":0,"termination_condition":"","violated_constraint_count":0},"system_controls":{"ioopt":3,"maxit":100,"weapon":1,"nmerit":1,"fix_wt":1.5,"con_wt":1,"zero_wt":10,"viol_wt":1,"mfn_wt":0.01,"objmin":0.00005,"del":1,"delmin":0.0001,"tol":0.0001,"smallnum":1e-7,"show_violations":1}}'),
('2018-12-03 17:56:54', '2018-12-03 17:56:54', NULL, 'Solid', '70PoundGoldBar', '{"symbol_table":[{"input":true,"name":"Length","value":5.68517,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"Longest dimension","equationset":true,"hidden":false,"smin":12,"smax":100,"vmin":-0.4737641666666667},{"input":true,"name":"Width","value":4.2,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":80,"ioclass":0,"sdlim":0,"tooltip":"Width dimension","equationset":true,"hidden":false,"smin":10,"smax":80,"vmin":-0.42000000000000004},{"input":true,"name":"Height","value":4.2,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":60,"ioclass":0,"sdlim":0,"tooltip":"Shortest dimension","equationset":true,"hidden":false,"smin":8,"smax":60,"vmin":-0.525},{"input":true,"name":"Material","value":13,"units":"","type":"table","table":"Solid/materials","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Select from list","equationset":false,"hidden":false},{"input":true,"name":"Density","value":0.698,"units":"lb/cu-in","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Weight per unit volume of the selected material","equationset":false,"hidden":false},{"input":false,"name":"Volume","value":100.28639880000001,"units":"cu-in","lmin":0,"lmax":0,"cmin":1,"cmax":1200,"ioclass":0,"sdlim":0,"tooltip":"Three-dimensional space enclosed","equationset":true,"hidden":false,"smin":1,"smax":1200},{"input":false,"name":"Surface Area","value":130.79085600000002,"units":"sq-in","lmin":0,"lmax":0,"cmin":0,"cmax":900,"ioclass":0,"sdlim":0,"tooltip":"Sum of the area of the surfaces","equationset":true,"hidden":false,"smin":592,"smax":900},{"input":false,"name":"VolToSurfArea","value":0.7667691906535118,"units":"ratio","lmin":0,"lmax":0,"cmin":0,"cmax":10,"ioclass":0,"sdlim":0,"tooltip":"Computed ratio of volume to surface area","equationset":true,"hidden":false,"smin":1.6216216216216217,"smax":10},{"input":false,"name":"Girth","value":16.8,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"Perimeter around width and height dimensions","equationset":true,"hidden":false,"smin":36,"smax":100},{"input":false,"name":"Length+Girth","value":22.48517,"units":"inches","lmin":0,"lmax":1,"cmin":0,"cmax":108,"ioclass":0,"sdlim":0,"tooltip":"Sum of length and girth dimensions. Shippers limit to 108 in.","equationset":true,"hidden":false,"smin":48,"smax":108,"vmax":-0.7918039814814816},{"input":false,"name":"Diagonal","value":8.221992333303406,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"3D distance from corner to furthest corner","equationset":true,"hidden":false,"smin":17.549928774784245,"smax":100},{"input":false,"name":"Weight","value":69.99990636240001,"units":"lb","lmin":0,"lmax":1,"cmin":0,"cmax":70,"ioclass":0,"sdlim":0,"tooltip":"Volume times Density of the selected material. Shippers limit to 70 Lb.","equationset":true,"hidden":false,"smin":34.559999999999995,"smax":70,"vmax":-0.0000013376799998354727}],"labels":[{"name":"COMMENT","value":"70 pound gold bar.  "}],"version":"5","result":{"objective_value":0,"termination_condition":"","violated_constraint_count":0},"system_controls":{"ioopt":3,"maxit":100,"weapon":1,"nmerit":1,"fix_wt":1.5,"con_wt":1,"zero_wt":10,"viol_wt":1,"mfn_wt":0.01,"objmin":0.00005,"del":1,"delmin":0.0001,"tol":0.0001,"smallnum":1e-7,"show_violations":1}}'),
('2018-12-03 18:00:36', '2018-12-03 18:02:56', NULL, 'Solid', 'StandardGoldBar', '{"symbol_table":[{"input":true,"name":"Length","value":7,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"Longest dimension","equationset":true,"hidden":false,"smin":36,"smax":100,"vmin":-0.19444444444444445},{"input":true,"name":"Width","value":3.625,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":80,"ioclass":0,"sdlim":0,"tooltip":"Width dimension","equationset":true,"hidden":false,"smin":18,"smax":80,"vmin":-0.2013888888888889},{"input":true,"name":"Height","value":1.75,"units":"inches","lmin":1,"lmax":0,"cmin":0,"cmax":60,"ioclass":0,"sdlim":0,"tooltip":"Shortest dimension","equationset":true,"hidden":false,"smin":18,"smax":60,"vmin":-0.09722222222222222},{"input":true,"name":"Material","value":13,"units":"","type":"table","table":"Solid/materials","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Select from list","equationset":false,"hidden":false},{"input":true,"name":"Density","value":0.698,"units":"lb/cu-in","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Weight per unit volume of the selected material","equationset":false,"hidden":false},{"input":false,"name":"Volume","value":44.40625,"units":"cu-in","lmin":0,"lmax":0,"cmin":1,"cmax":1200,"ioclass":0,"sdlim":0,"tooltip":"Three-dimensional space enclosed","equationset":true,"hidden":false,"smin":1,"smax":1200},{"input":false,"name":"Surface Area","value":87.9375,"units":"sq-in","lmin":0,"lmax":0,"cmin":0,"cmax":900,"ioclass":0,"sdlim":0,"tooltip":"Sum of the area of the surfaces","equationset":true,"hidden":false,"smin":3240,"smax":900},{"input":false,"name":"VolToSurfArea","value":0.5049751243781094,"units":"ratio","lmin":0,"lmax":0,"cmin":0,"cmax":10,"ioclass":0,"sdlim":0,"tooltip":"Computed ratio of volume to surface area","equationset":true,"hidden":false,"smin":3.6,"smax":10},{"input":false,"name":"Girth","value":10.75,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"Perimeter around width and height dimensions","equationset":true,"hidden":false,"smin":72,"smax":100},{"input":false,"name":"Length+Girth","value":17.75,"units":"inches","lmin":0,"lmax":1,"cmin":0,"cmax":108,"ioclass":0,"sdlim":0,"tooltip":"Sum of length and girth dimensions. Shippers limit to 108 in.","equationset":true,"hidden":false,"smin":108,"smax":108,"vmax":-0.8356481481481481},{"input":false,"name":"Diagonal","value":8.074845199754606,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"3D distance from corner to furthest corner","equationset":true,"hidden":false,"smin":44.090815370097204,"smax":100},{"input":false,"name":"Weight","value":30.9955625,"units":"lb","lmin":0,"lmax":1,"cmin":0,"cmax":70,"ioclass":0,"sdlim":0,"tooltip":"Volume times Density of the selected material. Shippers limit to 70 Lb.","equationset":true,"hidden":false,"smin":0.50551776,"smax":70,"vmax":-0.55720625}],"labels":[{"name":"COMMENT","value":"The US standard gold bar is not a rectangular solid.  It has sloped sides.  The dimensions here are a rough approximation."}],"version":"5","result":{"objective_value":0,"termination_condition":"","violated_constraint_count":0},"system_controls":{"ioopt":3,"maxit":100,"weapon":1,"nmerit":1,"fix_wt":1.5,"con_wt":1,"zero_wt":10,"viol_wt":1,"mfn_wt":0.01,"objmin":0.00005,"del":1,"delmin":0.0001,"tol":0.0001,"smallnum":1e-7,"show_violations":1}}'),
('2019-02-10 00:56:26', '2019-02-10 00:56:26', NULL, 'Solid', 'USPS_MachinableParcels', '{"symbol_table":[{"input":true,"name":"Length","value":27,"units":"inches","lmin":1,"lmax":1,"cmin":6,"cmax":27,"ioclass":0,"sdlim":0,"tooltip":"Longest dimension","equationset":true,"hidden":false,"smin":6,"smax":27,"vmin":-3.5,"vmax":0},{"input":true,"name":"Width","value":17,"units":"inches","lmin":1,"lmax":1,"cmin":3,"cmax":17,"ioclass":0,"sdlim":0,"tooltip":"Width dimension","equationset":true,"hidden":false,"smin":3,"smax":17,"vmin":-4.666666666666667,"vmax":0},{"input":true,"name":"Height","value":17,"units":"inches","lmin":1,"lmax":1,"cmin":0.25,"cmax":17,"ioclass":0,"sdlim":0,"tooltip":"Shortest dimension","equationset":true,"hidden":false,"smin":0.25,"smax":17,"vmin":-67,"vmax":0},{"input":true,"name":"Material","value":4,"units":"","type":"table","table":"Solid/materials","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Select from list","equationset":false,"hidden":false},{"input":true,"name":"Density","value":0.0001237,"units":"lb/cu-in","lmin":0,"lmax":0,"cmin":0,"cmax":0,"ioclass":0,"sdlim":0,"tooltip":"Weight per unit volume of the selected material","equationset":false,"hidden":false},{"input":false,"name":"Volume","value":7803,"units":"cu-in","lmin":0,"lmax":0,"cmin":1,"cmax":1200,"ioclass":0,"sdlim":0,"tooltip":"Three-dimensional space enclosed","equationset":true,"hidden":false,"smin":1,"smax":1200},{"input":false,"name":"Surface Area","value":2414,"units":"sq-in","lmin":0,"lmax":0,"cmin":0,"cmax":900,"ioclass":0,"sdlim":0,"tooltip":"Sum of the area of the surfaces","equationset":true,"hidden":false,"smin":592,"smax":900},{"input":false,"name":"VolToSurfArea","value":3.232394366197183,"units":"ratio","lmin":0,"lmax":0,"cmin":0,"cmax":10,"ioclass":0,"sdlim":0,"tooltip":"Computed ratio of volume to surface area","equationset":true,"hidden":false,"smin":1.6216216216216217,"smax":10},{"input":false,"name":"Girth","value":68,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"Perimeter around width and height dimensions","equationset":true,"hidden":false,"smin":36,"smax":100},{"input":false,"name":"Length+Girth","value":95,"units":"inches","lmin":0,"lmax":1,"cmin":0,"cmax":108,"ioclass":0,"sdlim":0,"tooltip":"Sum of length and girth dimensions. Shippers limit to 108 in.","equationset":true,"hidden":false,"smin":48,"smax":108,"vmax":-0.12037037037037036},{"input":false,"name":"Diagonal","value":36.15245496505044,"units":"inches","lmin":0,"lmax":0,"cmin":0,"cmax":100,"ioclass":0,"sdlim":0,"tooltip":"3D distance from corner to furthest corner","equationset":true,"hidden":false,"smin":17.549928774784245,"smax":100},{"input":false,"name":"Weight","value":0.9652311,"units":"lb","lmin":1,"lmax":1,"cmin":0.375,"cmax":25,"ioclass":0,"sdlim":0,"tooltip":"Volume times Density of the selected material. Shippers limit to 70 Lb.","equationset":true,"hidden":false,"smin":0.375,"smax":25,"vmax":-0.961390756,"vmin":-1.5739496}],"labels":[{"name":"COMMENT","value":"USPS Machinable Parcel dimensions"}],"version":"5","result":{"objective_value":0,"termination_condition":"","violated_constraint_count":0},"system_controls":{"ioopt":3,"maxit":100,"weapon":1,"nmerit":1,"fix_wt":1.5,"con_wt":1,"zero_wt":10,"viol_wt":1,"mfn_wt":0.01,"objmin":0.00005,"del":1,"delmin":0.0001,"tol":0.0001,"smallnum":1e-7,"show_violations":1}}');