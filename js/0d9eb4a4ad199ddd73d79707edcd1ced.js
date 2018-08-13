(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('东沙群岛', {"type":"FeatureCollection","features":[{"type":"Feature","id":"442100","properties":{"name":"东沙群岛","cp":[116.887613,20.617825],"childNum":4},"geometry":{"type":"MultiPolygon","coordinates":[["@@N\\`ZrDVBrCf]\\mRmBqWY]OoFyZe^a\\SfA^"],["@@JVZNT@B@TSno\\cB_ES@AWCaAaR]dOfId"],["@@IBGBIBEBID@@AB@BB@@@BBA@BD@@DBDBB@B@B@DAFCFAD@B@DCB@B@@ADGBCA@E@"],["@@tJrHtC^BvGj[JK\\{R§CS]{Ycc_q]K{AuLUJSPCJBLFHNFKNlRtn`CMhQJ]BuDUCKCIBIHOFK@[AQAKDCJDHHBFFCN@HDF"]],"encodeOffsets":[[[118726,21604]],[[118709,21486]],[[119538,21192]],[[119573,21271]]]}}],"UTF8Encoding":true});}));