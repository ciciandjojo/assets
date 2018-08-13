(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('西陵区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"420502","properties":{"name":"西陵区","cp":[111.285646,30.710781],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@AC@@@@GK@@@@@@ECAACBC@ADA@@BAF@D@A@@A@@A@@CB@@@AAB@@@@E@CB@@A@@B@@AB@@@DADABC@A@@@@@@@@@AAAA@@ADAA@BAA@@@@BA@@A@@A@@@@AB@@ABA@@AAAA@@@@AACAAAACBKHABABCD@@EF@@@BADCFAJADAH@DAB@HBD@BFJBDB@FJDDDF@B@F@F@DCHADADCDCDEBIDYDcF]DA@AB@BCJBBDDB@DFDD@DBDAJ@DB@BBDBDAFAD@FA@@D@F@B@DAB@B@@@B@B@BAB@BA@@FAFAFAD@F@B@DBD@B@@@DAHE@ABC@A@ABCAA@@ACBAD@F@BCAC@A@AB@FAB@@A@@BAB@@A@A@CBCBCB@DCB@FCFABAFAF@B@@@HBB@B@B@BAB@FBBBDBFBDBD@@@B@DAD@FDDA@@D@DEBC@AACACAAAA@ABA@@DBB@HC@@@@BAB@DBDDHBDDBDB@B@BABA@CA@@CBC@ABA@@DABC@AACAAAA@AAE@E@@BADC@@BCBC@A@@@AACACAA@ABAD@D@BA@AAAAEGG@C@CC@A@@CCAC@ABA@@@@@C@IAC@G@A@C@CBEDA@C@@A@ACE@AA@@@@@@A@@"],"encodeOffsets":[[114004,31426]]}}],"UTF8Encoding":true});}));