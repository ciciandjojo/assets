(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('芦溪县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360323","properties":{"name":"芦溪县","cp":[114.029827,27.630806],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BA@A@C@ABA@A@A@AA@AAAAA@@AC@A@@@CAAAAA@@A@A@A@@@A@B@@A@@@AAA@@A@@ABCAC@E@A@@A@A@C@A@EACACAC@@@IA@@@@@@ABA@C@@BA@@@@B@@B@@BA@ABA@@BAB@B@@BB@@@D@B@BBBA@AB@@A@@@@@@@A@A@A@@@AAAAA@E@A@AB@@AB@@ABA@@@A@@B@@A@AB@@@@BB@BA@ABCDABA@@BA@A@@BABABCB@@@B@@B@D@@@B@@B@BB@@@B@@@B@@@@B@B@B@@@BB@@@A@A@@BA@A@@B@@@@@@D@BB@@@B@@@@CB@@CB@@A@A@AAA@A@A@A@A@AAAAAAA@@@AB@@@BABBD@B@B@BA@AB@@@B@B@@A@CB@@@@@@BF@B@B@@AB@@@DABABA@@B@B@@@B@B@@@B@@@@@B@@@@A@@BA@@B@@BB@@@@@BB@@@@@@B@@@@@B@@@@@B@@CB@B@@@@@BBF@@BB@B@@@@A@AAAA@@AB@@@@@BB@@B@@@BAB@B@@@@B@DAB@DABAB@@BB@@@@B@@A@ABCB@B@B@@@B@@B@@@B@@ABAB@DABAB@B@@B@@@B@@@BA@A@CBA@@BA@@D@@B@DAB@H@B@BAD@BABAB@B@B@D@D@B@BABADAHABAB@@@B@@@B@@BD@B@@BA@@B@@ABABADABA@AB@BA@@B@@AB@@BB@DBB@@@B@D@@@BB@@BDBD@@B@@@@@BC@@@A@@@@BB@DDB@BBFBB@@B@B@B@BA@@@C@@@ABA@@@A@EA@@A@AAA@C@A@ABA@@BA@@AAAAA@AA@@@A@@A@@A@ABABA@ADAB@B@@@B@BB@@@@BABA@@@@B@@@H@F@B@BB@@B@BB@BBBBA@B@@@B@@BB@@@@B@@B@@BB@@@D@@BB@@B@B@@@@@@@B@@DBB@@B@@B@B@@@BB@BBB@@BBB@@BBB@BB@@@B@D@B@BB@@@@@@@BB@BAB@B@@@B@@BB@@@BB@@@AB@B@@A@@@@@AA@@@@@B@B@@B@@B@@A@@@@@@AA@@@@@@B@@B@@@@@@@BA@@@@B@@@@@@D@@A@@BB@@BB@@@B@@@@ABABADA@@B@B@@@BA@@@B@@@BB@@@@BB@@@@@BA@@B@BAB@BA@@@AA@@@@@BBBBB@@@B@@@@@BA@BB@@AB@@@BB@@BD@@@B@BBB@@@B@@BB@BBBB@@B@@@@B@@BBB@@BB@@@@@B@B@B@@@@@B@B@@@B@B@@@BABA@@D@BB@@@BB@B@@B@BBB@@@@@BD@@@@@@@B@@@@A@@B@@AB@@@@@@A@@B@@@@@BA@@@@@@BA@@@@@@@@@AB@@@@ABB@@@@B@@@@@@@B@@@@@@@@@B@B@@@@@B@@@@@@BB@@B@@BBB@D@BB@@BAB@@@B@@A@@B@B@@@B@@ABAB@@@BAB@@@@@@A@@@B@A@@B@@A@@@@B@BB@@@CB@@@@@B@@@BA@@@B@@B@@B@@@@A@@@@@@B@B@@@@@B@@@@BA@@@@@@@B@@@@@@B@@A@@@@B@@@B@B@@@AA@@@@AA@@B@@B@@DA@@@AB@@@BB@@@@@@@@@BA@A@@@@@@BAB@B@B@@BB@@AB@@@B@@@@@@@@@B@@@@@@@@AB@@@@@@@@@@@@@@@@@B@@@@@@@BB@@@@@@@A@@@@B@@@@A@@@@@@@@@A@@B@@@@@@@@@B@@A@@@@@B@@@BB@@@@@@@@@B@@@@@@@@B@@@@@@@@A@@B@@A@@@@@@@@@@@AB@B@@@@@@@@@@@B@@B@@@@@BA@@@A@@@A@@BA@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@A@@@@@A@@@@@@@@@@A@@@@@@@@AA@@@@A@A@@@@B@@@@@@@@@@@B@@@@@@@@BB@@@@@@B@@@@@BA@@@B@@@@B@@@@@@@@@@B@B@@B@@@@B@@BB@@B@BAB@BBB@BB@@B@ABB@@@@@BB@B@BAB@@@@BB@@@@B@@@@B@B@@@@@@@@B@@@@@BA@@@@@@@@@@B@@B@@@@B@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@B@@BB@@@@@@B@@@@B@@@@@@@@B@@@@@B@D@B@@@@@B@B@@@B@@@@@@@@B@@@@A@C@A@@@@@@B@@B@@@D@@@@@B@@AB@@@B@BB@@B@@B@@@@A@@@@@@@@B@@B@@@@@@B@@B@@@@@@@@@@@B@@@BB@@@@A@B@@@ABA@@@B@@@@@B@@B@@@B@B@B@@A@AB@B@@@B@B@@@@@@@B@B@@@@A@@@@B@@A@A@@A@@A@A@@@A@@B@@@@B@@@BB@@@B@BA@A@@@@BABB@@@@@B@@@D@@@B@@@B@@@B@@@BB@@@@B@BBB@@@@BBB@@@@AB@@@B@@@B@@@B@B@@@@B@@B@BD@@@@@@@@@@D@BB@A@@BB@@@BB@@@@@BAB@B@@B@@@@BA@@B@@@B@@BB@B@@D@BB@@@BA@@B@@@@@@@B@@A@@BA@@B@@@@@B@@@@@B@@@B@@@@@B@@@@@@@@@@B@@@@B@@A@@BA@@@@B@@B@A@@@BB@B@@B@B@@B@@B@@@@@@B@B@@@B@B@@B@@@@BA@@@@B@@@@ABBB@@A@@B@B@B@@@B@B@@@@@B@@ABAB@@@@@B@BB@@B@@AB@@ABABAA@BAA@@@B@BA@@B@BA@@@A@A@@@A@@B@@@@BB@B@@B@@@@@AB@@@@@@B@@B@@@@@B@@@@@B@@BB@@BB@@B@@@@@@@B@B@@@@@BA@@BAB@B@BBB@@@B@BBB@B@B@BBB@@@BBBB@@BBDAB@@@B@@@@DB@BAB@B@B@@@@@B@@BB@@@B@@@BBB@DBBB@BB@@ABB@@@@BA@@@B@@@@@B@@@B@@B@BB@@@@BB@@B@@@BBB@B@@@BB@@@@B@@B@@@B@@@BB@@B@ABB@@@@BBB@@@D@B@BBB@BB@@B@DFB@B@BB@@B@D@B@D@@@BB@@DBDBBBB@B@@@BB@@@B@@@BA@A@BB@@@@@B@@BA@@D@BAB@@@@AB@@@BBB@BBBBB@BBB@BBDBB@B@B@@ABB@@B@@@BD@@@BB@BB@@@@@@@@@@A@@AA@@@@B@@B@BB@@B@@@@@B@@@@A@@B@B@@@@@@B@@A@@@A@@@@BB@@BB@BBBBB@@@B@@@@@@@@A@A@A@@B@@A@@@@BBB@@@@@@@@@B@@B@@A@@@@BBA@B@@@B@@@@@@@@@@B@@@@@B@@A@@@@@@@A@@B@@A@@@@@AB@@@@@B@@@B@B@B@DDD@BBB@BBB@BB@@@@@BABA@AB@@@BA@@@@@@@A@@@A@@BAB@BB@@@@@@@BBB@B@C@@B@@@@AB@@B@B@@BB@@@B@@B@@AB@@@@@@@@@@@B@@A@@@@@@@A@@@@@@BB@B@BA@@@B@@@@@@@AB@@@B@B@B@B@@@B@@@@@@@@@@A@@BABABA@A@@D@@@@BA@@@B@@@AB@@@B@@BA@@@@@@@@B@@@@@B@@@@BB@@@B@@@@@B@@@@A@@A@@AA@BAAA@@@@@A@AB@@@@BB@@@@@@A@@@A@@@@@@BA@@@@BA@BB@@@@@BB@@BA@@B@@B@@D@B@B@BA@@BA@@@A@@@AB@@E@@@@@A@@@@B@B@@@@B@B@@@@@@@BA@B@@BB@@A@AB@@A@A@@B@@@@@@AB@@ABCBB@BBADB@@BAB@@@@@BB@B@A@@BA@A@@@@A@@@@@@@A@@@A@@@@@@@AB@@@AB@@@@@@AA@@@A@@AA@C@@@A@@@@@@A@@@@B@@@B@@@@@@@@@@BB@@@B@@@D@@@@B@@B@@@B@@@@A@@@ABA@@AAA@B@@@BCB@@@@@@@B@@@BA@A@@@AA@@@AA@A@@@@@@A@A@@A@@AA@@@BA@@@AA@A@A@@@@@@AA@@@@@@@A@@BABBB@FBB@@@@@AB@@B@@B@@B@@@@@BBB@@BD@B@BA@@@@D@D@@@BAB@B@B@@A@@@@B@@A@@@@@@B@@@B@BB@@AB@@BB@@@@B@@@@A@@@@@A@@@A@@@A@@@@AA@@BC@@@AA@@AA@@@BA@A@@@@@@@B@B@@@@@ABA@@AC@@@ABA@@@@BABABABA@@@AB@BCBABA@@BA@A@@BA@ABA@@@@BAB@@AB@@@BA@@@@@A@@A@A@@@@A@@@AB@@A@@B@B@@@BAB@@ABAAA@A@@AA@@@@A@@@AAA@@B@@@@AB@B@@@B@@AAA@@@@@@@@A@A@@BA@@@AB@@@@A@@@@BA@@@@BBB@B@@@@A@AA@@AD@B@@@BA@ABA@@B@@AB@@@BA@@@@@A@AB@@@@A@@AA@@@AA@@A@@BAB@@@BAB@@@@A@@@A@@BA@@@AB@@AB@@@@B@BB@@@B@@@BABA@@BA@@@@B@@C@@@AB@B@@@A@@AB@B@@A@@@@@AB@@@@@AA@@A@@@@AB@@@AC@C@@@A@@A@@A@A@@@AA@@A@@AAAAA@@AAABA@@A@@AA@@A@@A@@AAA@@@@@@AA@@BAA@AA@A@@A@AB@@A@@@@@A@@@@AA@CB@@A@@@A@@A@A@@A@@@@@@AB@BAD@@@@AB@@@B@@@B@@@B@@@BAB@BBB@BAB@BA@@@A@@AA@A@@BAB@B@@@@@BAB@@A@@@A@A@AAABA@@B@DA@@BAB@@A@@@AB@@AA@@@@A@@@@@A@@BA@AAC@A@@CBAA@@@AB@B@B@@A@@BBB@@@B@BBB@B@B@B@@@B@BA@@@@BAB@BA@@@@@@@A@A@@@A@@@AB@@@BA@@BA@@B@B@@@@A@@@AA@@A@@@@BB@@@AB@B@BB@@BA@@@AB@@@@A@@@@@@@A@@BABAD@DA@@FA@@@@BA@A@A@A@A@@B@B@@@B@BAD@D@@@B@@@@@BA@@BAB@@AD@@@B@@A@@@@@A@A@@BAB@FB@A@@A@AAA@@CB@DCB@@AB@@@@@DBB@DBB@@@@B@B@@B@@A@@AAB@@AB@BB@A@@@@CAA@A@AAAA@@A@A@@AAAAAA@A@A@@@EA@@AA@A@@AA@@AA@@@@AABA@@A@@A@@AA@@A@@@A@@@@@C@@@A@A@CA@@@A@@A@A@AA@@@AAAA@@@AA@@A@A@A@@@C@@@CB@@AAAACA@@AA@@AAAAA@C@A@@@CA@@AC@@@AA@@ABAA@@A@A@@@A@A@@@AAABA@A@@@AA@AA@A@@@AAA@A@A@@@A@@AA@@@AA@@AAA@@AA@@AAC@@AA@@@AAA@A@@@A@@A@@A@@@A@AAABC@@@A@@AA@AA@@@@AA@@A@@AB@@AA@@A@A@@@@AABABAA@@@AG@@@@AA@@@A@@@AA@BA@@BA@@BC@@BA@@BAB@@A@@@@BC@@@A@AC@@@@A@@@@@A@A@@@@@A@@@A@@@A@A@@CA@@AA@@AC@@AA@AA@@A@@AA@@@A@AAA@A@@@ABC@@EAA@A@EA@@A@@@A@@AA@@A@A@@@@@@A@AAA@AA@@BCAA@A@AAA@@AA@A@@@@AABA@A@A@@AC@@@A@@@CCA@AA@@AAAAA@@AAAAA@A@@@@@@@AAA@A@@AA@@@A@A@@AAA@@@@@@A@A@C@A@A@A@@@AA@@@@AAAA@@@@@@@@AAAAA@@AA@@@AA@@@@A@AAC@@@A@@@A@A@@A@@A@@B@@AA@@A@CB@@A@@@A@@@@@@BA@@@A@@A@@A@@@@@@AA@@@@@AAA@@@@@A@@@A@@@A@@@A@@@A@@@A@@@@@AB@B@@A@@BA@ABA@@@ABA@AB@@@BA@AB@@A@A@AAC@@@A@A@@AA@A@A@A@@@A@A@@@CAA@@@AAA@A@AAA@AA@AA@A@@@A@A@CC@@A@A@@@A@@@C@@BA@A@ABC@AB@B@BA@@@@BA@@@A@@@@BA@@BA@@@@AA@A@A@@@BA@@C@@@@@A@@@@@A@@B@@@C@AA@@@@B@@@@@A@@@@C@@@AAAA@@@@ABA@@@ABABA@@@A@ABA@C@AAAA@@A@@BA@@@ABA@A@@@A@@@@@A@A@@A@@C@@AA@AAAA@@@@AA@A@@AAA@@AA@@@A@@@@A@@A@CBABABA@CBEBA@A@A@@@AA@AACA@@@AAA@@@AB@@ABA@ABA@@@EBA@A@AAAA@@AAAAA@@ACBABA@E@EBA@EDAB@@ABABCDABABABA@EDCDA@@BAD@BABAB@@BFAF@@ADAB@BAB@@@DAD@B@@@@A@ECC@@@CBG@CAA@A@@@A@A@AB@@A@@@A@A@@AAA@@A@C@EAA@A@C@@@@@A@A@@@AA@@B@AC@AAE@A@A@CBC@A@A@C@AAA@A@C@C"],"encodeOffsets":[[116660,28094]]}}],"UTF8Encoding":true});}));