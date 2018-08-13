(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('良庆区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"450108","properties":{"name":"良庆区","cp":[108.39301,22.752997],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@AB@BAB@@@@@BA@@B@BA@A@@@AB@@A@@@AB@BA@@@AB@B@@@@B@ABBBA@BB@@@BA@@@@@@DBB@@A@@BA@BB@BB@@@@@@BABA@@@@B@B@@B@@@@BBB@B@@@B@@A@@B@@@@@@A@@B@@BBB@@@BD@@BB@@@B@@@@@BA@A@@B@@A@@B@B@@@B@@@B@BA@@@@BB@@@@@BBBB@@BD@@@DB@BD@@BB@@DBBBB@BA@AA@AC@@B@@@B@D@D@B@B@@@@ABABABAB@DAB@B@BADBD@FBB@BBDBB@DFDBLHLHDBBBD@BBD@D@D@DAB@@@BCBA@ABADADADA@@DAFAHAHEDEDEDCDEDAF@B@F@FBDDDD@FFA@@@GB@@@BA@BD@@ABAB@AAAAA@@@BAC@AA@@@@A@AA@AB@AA@AAA@@BABCD@B@@AB@B@B@BA@@@@@@CB@A@A@@B@@A@@@@BAB@@@B@DA@@@A@@@@C@@A@@@@A@@@@@@@@A@@@@@@@@@@@A@@B@@@@@A@@@@@@AB@@A@A@A@@AB@@@@BC@AB@@@BA@@@ABB@AB@@@B@@@@@BA@@@@B@BA@@@@AA@A@@@AA@A@AAA@GEA@A@A@@A@@@C@A@AB@@A@C@A@@@@@A@@B@B@@@@AB@@A@@A@C@A@@@@AA@@@@A@@@ABAAA@@@AB@@C@@@@AA@@@@@@@@B@AA@BA@@@@AB@@@@@BA@A@@@@B@@B@@@@BA@@@@@@B@D@B@@A@@@A@@@@BB@@@@BC@@A@@@A@AACA@AC@@AAA@A@@JEFAB@@@BA@C@A@@@AEAA@A@A@C@A@@AA@A@CB@@@B@D@B@@ABA@@AA@@ABC@@ACB@@A@ABA@A@A@A@A@@BC@A@AA@@A@A@@BA@@B@B@BB@AB@@C@@B@B@B@@@@A@A@CAA@A@@DB@@B@@@@A@A@@A@A@AA@@B@@@D@@A@A@@@BB@@@B@@@@A@A@@@@@@B@@@B@@@@ADA@@B@B@@ABA@@@@@A@A@@@@AAAA@@A@@A@@@A@AA@AA@@@AA@@A@@AA@@B@BA@@@A@A@AA@@ABC@@@AA@A@@@@@@A@@@@A@@@A@@AA@@A@@@@@@@@@@BA@@@@B@@AB@@A@A@A@@@C@AA@BA@@B@@A@@A@@AA@@@A@@AB@@@@@AA@AA@@@A@@AA@CA@@@A@@A@@AA@A@@A@@BC@@@@@@BA@ABA@@AA@@@ABA@@@@B@@@BB@@@@@A@@@@BA@@BAB@BA@ABA@@AA@@@@@A@ABADC@@@A@A@@@@@AAAC@AA@@AAA@@@@A@@A@A@@@A@@@AAA@A@A@@@@A@ABA@A@@@A@AA@@@@CB@AA@AA@A@@@AB@@A@@@@@@@@C@@@A@@A@@@A@@@A@AA@@@@AB@@A@@@@@@@@B@@CB@@@ABCA@C@BA@@@A@A@@@AB@@@BBBA@@@A@@BAA@@@@C@A@@BA@B@@@@D@@@@AB@@@@@C@@@@@@A@@A@A@AA@@BA@A@@@@@A@@BB@@@ABA@@@A@@@A@AA@A@@@AA@@@@B@@A@@@@@AB@@A@@BA@@D@@AB@B@@AA@@@BA@@@C@@BAB@B@@ABA@@A@@AA@@ABA@AAA@A@@@@@ABA@AAAB@@@B@AA@@@@A@@A@@@@B@BA@@@A@AAA@@BA@@BB@@@@B@@@@C@@BAB@@@@AA@@@BA@ABAB@BB@@BA@@@A@@@A@@B@@@@@@B@@@@B@@@@@@@BAAA@ABA@@@A@@BC@@AB@@A@A@@@BAA@@@@@@@@@@@A@@@@@@@A@@@BA@@AA@@@@@A@@@@AB@@@@@A@@@@@@AA@@@@A@@@@A@@@@@@AD@A@@@@@A@@AB@@AA@@@A@@@@@A@A@@@AA@@@BA@ABABA@A@@BA@@DA@AAA@@@@@@B@@@B@B@BA@@@@@AB@@AB@@@@@AA@@@@BAAA@@@@A@@@@A@@@@CA@C@@B@@@@A@@@@@@C@@@@A@@BA@@@@@@AA@@@@@A@@@AAC@@BA@@@A@A@@A@CD@@@@@@@ABA@@@@@A@@ABA@@@@A@@BA@@@@@A@@@@A@@@@A@@AAB@@@@@B@@@@@BA@@BA@A@@BA@@A@@AB@@@B@@A@@BA@A@@@A@A@A@@BA@@@@B@@@B@B@@@@@BB@@@B@@@@@@@@@@BA@@@@@A@@@@@@BBB@AA@A@@@@@@@A@@@AC@@@@@B@@@@@AA@@@@@A@@AA@B@@A@@A@@@@@@@@@@@A@@@@A@@@@@@@@AA@@@@B@@@CB@@A@@AA@@A@@AAAB@AA@@@@BAA@@@AAAA@@B@BAA@A@DAAA@AAA@@BABAB@@@B@@@DA@AA@@@@@@A@@@A@ABA@@@@D@@@@@@A@@A@@@@@@A@AAA@AACAA@@D@@@B@@BB@@@@@BA@AA@B@BBB@B@@ABA@ABBB@@@@@@B@@@@BB@@@BD@@@DB@@B@@@@A@@AA@A@BB@@@BB@AB@BB@@@BB@@BB@@B@@B@BA@BBAB@@@B@@@A@@AB@@@@@BABB@@@@BA@@B@@@@@B@@@@BB@@@@B@@A@@B@@DB@@BB@BBB@BBB@@@B@@EA@@@@ABAB@@@@AAAB@@@@@BB@B@@@BB@BB@@@@@@B@B@@@BA@A@@BCB@@@@B@BB@@B@@@B@AB@BB@D@@@@@@@@BB@@BDBB@B@@A@@@@@A@@@@@A@@@@D@@@@@B@@BBB@@@B@@A@A@BB@@B@@BBBB@@@BB@@@A@@@@B@@@B@@@A@@A@@@A@@B@B@BB@AB@B@@A@AA@@@A@@A@@@@BAB@B@B@BAB@@@@@@@BA@@B@@@BA@@@ABA@@A@@@@A@@B@@@BAAC@@B@@AB@@@@@B@@@BAB@B@B@@BBBB@B@BA@B@@B@@@B@@A@@B@@@B@BA@B@@@@B@@@@@BB@@BA@@B@@@B@@AB@@@@B@BB@B@@@BAB@@ABB@@@@@@@B@BB@B@@@@@@BB@BA@@B@@@B@@@@BA@@B@@@B@D@@@@AD@@BB@@@@B@@BB@@@@AB@@@@@@B@@B@@@@@BB@B@@B@@@@@@@@@B@@@AA@@B@@@@B@BB@@B@@B@@@BB@@@A@@AA@@@@B@@A@@B@BA@@B@@@@@B@@@@AA@@@@ADE@@B@B@@A@@@@B@D@@@@@BA@@@AA@@A@@DB@@B@@@AB@B@@B@BA@ABA@@BA@@@@@@@@B@BABB@AB@B@@A@@B@@A@@@AB@B@@@B@@@@B@@@@@@B@B@@AB@@A@@BAE@@@AC@A@@@@ABA@@@A@AA@@A@AB@AC@@A@A@@@@@A@@@@@A@@AC@@A@@@BA@@@@@AB@A@BA@@@B@@@@@ABA@A@@@@AA@@@AA@@A@@AA@@A@@AAA@@AA@@AA@AAA@@AAA@AA@AAA@@@@AA@@BA@@@@BA@@B@B@BABA@A@AB@@@@@B@BAB@D@BA@@BBB@@@@@@@BA@AAA@@@@@@DBB@@@@A@@@@@@AA@@@AB@@@AA@@@ABA@A@A@ADA@ABAB@@ABA@@A@@A@@@A@ABAA@@@AAA@A@CAABA@@@AB@@A@A@@@AAAC@@@@@AC@@AA@@@A@A@@@@@@@B@@@@AA@@@A@@@B@@@AA@@@A@@A@@@@@A@@@@@@A@@@@@@@@@@BA@@BA@@@ABAA@ACAC@@BAAA@@A@@@AA@@B@AABA@@AA@@A@A@@@A@CA@@@BA@@@@ABA@A@@@A@@@@B@@CB@@A@@AA@AA@@@@@@A@@BA@AB@@@AA@CA@@@@AB@@@B@B@B@@AB@B@BAB@@@BABA@@@@@@@AAA@@AA@@A@@ABA@@@@AA@AA@@@AAAAA@@CAA@ABA@@@A@AB@@AB@@A@@@A@@@@@AA@A@@C@@CAA@AA@@AA@@AA@A@A@A@CCA@CAAA@@@@@AE@AAA@A@@@@AA@@@@AA@@@@A@@A@@AA@@AAAA@@@CB@@@BA@@@@@A@A@@@A@@@@@@A@CA@@C@@AA@@@A@AAA@A@@BABA@A@@BA@A@A@C@@@A@EB@AA@@AB@@AA@@A@@@@@A@A@@@A@@@A@@@@@A@@@A@@A@AAAAAAA@@AA@@A@A@A@@@A@@@A@@@@@A@@A@@@@AA@@@@A@@@A@@AA@@@@@AB@B@@AB@B@@@@@@A@@@@@A@@@AA@@A@A@AA@@AA@@@@@@@@A@@AA@@@A@@AA@@@@AA@A@@@@A@@AAB@@AAA@@@A@C@AB@@A@@B@@AB@@@@@@A@A@A@A@@@A@A@A@@@A@@@A@@@A@@@@@@@A@@@AA@@AAAA@@@A@@@BA@A@@@@@AB@@@@A@@B@@A@@@A@@B@@C@A@@@@@A@AA@BAB@@@@A@@@@@@BABA@@@@@@BA@A@A@@@@@@B@@@B@@A@A@@@@@AB@B@@A@@@@@AA@@A@@@A@@@@@@@A@@@@BA@@@ADAB@@A@@BA@AAAA@@A@@@@@A@A@@@@@A@@@A@@@AB@@ABA@AB@@@@@B@B@@@@@@A@@@A@@B@@A@@BAB@@@B@@@BC@@@@@@@@B@BA@@B@@@@@B@B@@@@BBA@@B@@@@@B@B@@ABA@@@@AA@@@C@@B@@A@A@A@A@A@AAAAA@CA@A@A@@AAAA@@@A@@@@@@BAAA@@@@A@@AAB@@AB@@@@@@A@@@A@@@A@A@@@A@A@@@@B@@A@@@AAA@@@@@A@@AA@A@@A@@A@A@AA@@AA@@A@AA@@A@@A@@AAA@A@@A@@@@A@@A@@A@AA@@A@@A@@AA@@@@@A@@A@@@A@@@A@AA@@@AAC@AA@@@A@A@@@C@A@A@@@@@AB@@E@A@@@A@@@A@@@A@AB@@A@ABA@@B@@A@@@@@AA@AA@AAE@A@A@@@C@A@C@A@A@A@@A@@AA@@C@@AA@CBA@@@CAAA@@@@A@A@AA@@A@CA@@@@@A@@AA@@@@AAA@@@A@@@AAA@AA@AA@A@AA@A@@AAAAAC@@A@@CAB@@A@@@A@@@AB@@A@@AA@@@A@@@@@AABA@@@@@A@@BA@@AA@AA@@AA@@A@A@@@@@A@@@C@@AA@@EAA@AA@@@AA@AB@@AAA@AA@@A@@@AAA@@@A@AAAA@@A@AAGABB@@B@@BDBA@@BA@AB@@AB@@@B@@A@@@@@BB@AB@@@@@@@@BB@@@@@B@@@@@@B@@@B@D@B@BAB@@@BBB@B@B@@AB@@AAABA@@@AA@@AB@@@@@BA@ABA@ADC@@@@@@@@B@B@B@@A@A@AA@@C@@A@@AAAA@@A@@@@BAB@B@@@@@B@B@D@@@@ABC@AFA@@@@@AB@@@@AA@@@C@AA@@@A@@@@B@B@@ABA@AB@@ABA@@@ADA@@B@B@B@@AB@BAB@BBB@@@BA@@B@@AB@@B@@B@@DBDB@@@BAB@@@@ABA@A@@BABA@AB@@A@A@@@@B@AA@C@@B@@@DCB@BAB@B@@BBA@@B@BB@@@AB@@BBAB@BDF@B@@@BA@@@@B@@B@@B@@BBB@@BAB@BABA@@BA@@@A@AB@@A@AB@B@@AAAA@@@@@@A@@A@@A@@@@B@@A@@B@@@BA@@B@@AB@@A@A@CAAA@CA@@AA@@ACBCB@@A@@BABAB@BA@@@CA@@@ACA@A@@A@@@@AA@@A@@A@@@@AAA@@A@@AA@AAAC@AA@@@@A@@A@@AAA@@AA@@AA@A@@ABABAB@BA@@B@@@@A@AAA@@BA@@AC@A@A@@@AB@B@@AB@@A@A@ABAD@@@B@B@@AB@@C@@@A@@@AB@@A@AB@@@@@B@@CBA@@@A@A@CBAAABAAA@A@@@@A@@A@C@@@@@A@@@@@ABBB@BA@@B@@AD@@AB@@@B@DA@@BABA@A@@@@@A@@@AB@@BB@@DBBBA@A@@@C@A@A@@@A@AB@@@@@@@BAB@B@B@B@@ABA@A@@@@@B@@BBDBD@@@@AB@BA@@B@@@D@D@@B@@B@BBB@@@BA@ABA@ABBBAB@@@BBB@B@@AB@@B@@@@BD@@ADABA@@@@B@B@@@@@@@@B@BA@@AA@@@@B@@B@@@@B@@B@B@@@AB@@B@@@@@@@@AB@@A@@@@@BB@@@B@@@A@@BB@BB@@BA@@A@@@BAB@@B@@@A@@@@B@@@@@@@@B@@@B@@BAB@@@B@A@@@@@@BB@B@@A@@B@@@@@B@@@@@B@B@@@@@AB@@B@@@BA@@B@@AA@@@@@D@@@@B@@@@B@@B@@BA@@@@@B@@@B@@B@@@B@@@@BB@@@@@@A@@@@B@B@@@@@@B@@@@A@@@A@@BB@@B@@A@@B@B@B@@D@@@@B@@B@@@@@@@CBA@@@@BB@@@@@AB@@@@B@B@@@BB@@@@A@@@@@A@@B@@@@ABB@B@BBA@ABADABB@@BB@@BA@@B@@DDD@B@@@@AB@B@@@@B@@@@B@@@@A@ABB@@@B@@@BB@BBAB@@@@@BB@B@BB@@AB@AAB@@B@@DA@@@B@@BBA@@@@B@ABBB@B@B@@B@BB@@@BA@@@BB@@B@@AB@@B@@@B@@@@@@@B@@BAB@@B@@B@@B@@@@@AA@@B@@@@@B@@@B@@@@@B@@@BB@@@A@A@@@@@@@@B@@A@@@@@@B@@@@@BA@@@A@@B@@@@CB@BBB@@AB@@AB@B@BA@ABAB@BA@AFA@BB@@BA@@BB@B@BBB@DA@@@A@@@@BB@@BA@@@@BAA@@@@AB@BABBBA@ED@BCA@B@@A@@@A@@BA@@@@@@AA@@AA@@BADBBABBB@@B@@@BB@@B@@@B@@@@B@BDBB@DBDD@B@DABD@DD@B@D@DBD@DBB@DBBB@BBBB@B@BBB@@@DB@B@@B@@B@B@@@BB@@@BD@BABB@@B@DB@B@@@FADB@B@B@B@B@BB@@@BDBFA@B@@@@B@@BB@@@@@AB@BBB@@@BAA@B@@@BB@@B@@@@@BAB@@B@@@@@@BABB@@@BB@@@B@@@@B@@BB@B@@@@@B@@@B@@@@B@@B@@@@BBBB@@@@AB@B@@BB@@B@A@@@B@@@B@@A@@BABB@@B@B@@B@@B@@B@@@BBB@@@@@@A@@B@@@@@@B@BA@@BB@@@B@B@@@AA@@F@@B@@B@BB@BC@@B@@A@@@@B@@A@B@AB@@A@@@A@@@@BCDA@A@@@CBAB@B@BB@BBBB@@BBB@BA@A@@BADCDABA@@DCDAFCBBBBB@@BB@B@B@@BB@B@@@ABBB@@BB@BA@ABBD@@@@D@DCB@DAJAD@DC@CBAD@B@BBFDD@HLBDJJHDDAFCF@BDAHAFABBDF@BD@BCBBB@@B@@DA@@B@@BDDD@B@B@@ABA@@BA@@@@B@B@@A@@@AB@@BB@@AB@B@@@B@@@@@B@BB@@B@@AB@BA@BDDBAB@@BB@@@BAB@B@@@@B@B@B@@ADCB@@ABBB@BA@@@B@B@@BBB@AAB@B@BB@@BB@@DLB@@@BB@BAB@@A@@@AB@BCD@@AB@BADEF@BC@AAA@A@CBA@@@@BA@@@@BA@@@A@A@A@A@@BA@@BCB@@AB@B@@CDAD@DBA@@B@FB@@@@B@B@B@@AB@B@B@B@@BB@B@B@BAB@B@@B@B@@@B@@@B@@@B@@@B@@B@@B@BBBB@@DA@@BAB@@A@@BA@@@@BD@@@B@@@DBBBBBDBBBABBB@BB@@B@@DB@B@@@BAB@@BBA@BBB@@@B@B@@A@@B@DAB@@@BB@B@@BB@BAB@@@@BB@@@@@@@D@@AB@@B@@@BB@@BD@@ABAD@@@BBB@@B@@BBBBDBB@@AB@B@B@D@BA@@@@B@@@B@@@B@@@BDF@@BB@@B@B@ABBB@@@@BB@BBBB@@B@B@@@B@@@@ADA@BB@@@BB@@@ABA@CB@@@BA@@@@BA@@B@@A@@@@@ABB@@BBAB@@@B@@B@@@@@BB@AB@BAB@@@@ABBB@@@BA@D@@@BA@BB@BB@BBDB@FB@B@BAB@BB@BB@@BB@@B@D@@@BA@@BAB@@ABBB@@@B@@@@@@@@@B@@B@@BB@@@@@BA@A@@@A@@B@@AB@@@@A@@@@@@B@@@BA@AB@@@@@@BB@@@BA@@@@BA@A@@@@@AACB@@@@@B@@@@ABA@A@@@@B@B@@@@ABA@@BA@@BAA@BADA@BB@BDD@BA@BFBDAB@F@B@BB@@B"],"encodeOffsets":[[110923,23267]]}}],"UTF8Encoding":true});}));