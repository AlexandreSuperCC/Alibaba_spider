async function test1(){
    let res = await handleRequestByPromise({
        url:'https://open-s.alibaba.com/openservice/categoryNaviViewService?appKey=a5m1ismomeptugvfmkkjnwwqnwyrhpb1&appName=magellan&locale=en_US&callback=jQuery18308350017212065441_1634040041999&dmtrack_pageid=6557d02d212cacd6616578e817c74604dcb108f78d&_=1634040043321',
        method:'get',
        json:true,
        headers: {
            "User-Agent":
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
            'Cookie':'ali_apache_id=11.179.217.73.1633421783363.500465.8; t=c78ba79be2dc8465fcef571cfea51c91; cna=NNtHGd6+4x4CAS7BQmp/T9tb; UM_distinctid=17c4f867c8b9fb-0109093a444a28-b7a1a38-1fa400-17c4f867c8c103d; intl_locale=en_US; _ga=GA1.1.165515066.1633441356; acs_usuc_t=acs_rt=d94cf6c9a8ef434dabf3b6d364a68f83; XSRF-TOKEN=e57b75a2-54cf-4a4c-8912-9f34199756ab; cookie2=163797163c1e10c8a5a3d8a1fe8da407; _tb_token_=78dd9b57bee33; _samesite_flag_=true; xman_t=/liCY534kwEHfXXQHcBBn/dXGO2kXjmZhdO4cMeq0QR7jLITFwNNKQUDE7bl8n/4SfC2oaOjJlMq0oBqyjCGghKCrdys4HZW0wVlqRUg1Aw=; xman_us_f=x_locale=en_US&x_l=1; intl_common_forever=tmzlFSuk44ZY3lJhfM1ClEwNvgKHpG5IZ7uIOeU3Fy++kE9jDiY4vA==; _csrf_token=1633927353549; xlly_s=1; _ga_RVSKK1KF5N=GS1.1.1634016188.6.0.1634016215.0; isg=BC8v8h6KksMWj5bGODYuu_-evkM51IP2EjB1ekG8yx6lkE-SSaQTRi3BFo6u6Ftu; tfstk=cSZGBIbmJPu65W7E2Gi_d-KpOMjRamKqsmoYYuV6P66x4ErKQs2p8U76KpcPKMYf.; l=eBx88p_cguE_tyMZBOfwourza77OSIRAguPzaNbMiOCP9XCB5xxcW6E78R86C3Gdhs3vR3z4bbs0BeYBq7F-nxvTuD0e8ekmn; _m_h5_tk=387a677bb0b76768d16872d19c8b90cb_1634043136036; _m_h5_tk_enc=1a063cf8a4fc69e6719184d185eecbfe; ali_apache_track=""; ali_apache_tracktmp=""; xman_f=FnnH50S/HQqR/b0CSp8oJPrWEvKX656JOB1/JOW+CnOCIB9QLhQEoyd5+HafrOWHCmHQc5Sc9OSZijlw5CdSm6aGtFSn+2EAZWeeE++kUxUBIBwyn5MWPQ==; sc_g_cfg_f=sc_b_locale=en_US&sc_b_site=CN&sc_b_currency=CNY',
        }
    
    })
    let obj = bufferToObject(res)
    console.log(obj)
}
test1()

async function test2(){
    let res = await handleRequestByAxios('https://open-s.alibaba.com/openservice/categoryNaviViewService?appKey=a5m1ismomeptugvfmkkjnwwqnwyrhpb1&appName=magellan&locale=en_US&callback=jQuery18308350017212065441_1634040041999&dmtrack_pageid=6557d02d212cacd6616578e817c74604dcb108f78d&_=1634040043321',{
        method:'get',
        json:true,
        headers: {
            "User-Agent":
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
            'Cookie':'ali_apache_id=11.179.217.73.1633421783363.500465.8; t=c78ba79be2dc8465fcef571cfea51c91; cna=NNtHGd6+4x4CAS7BQmp/T9tb; UM_distinctid=17c4f867c8b9fb-0109093a444a28-b7a1a38-1fa400-17c4f867c8c103d; intl_locale=en_US; _ga=GA1.1.165515066.1633441356; acs_usuc_t=acs_rt=d94cf6c9a8ef434dabf3b6d364a68f83; XSRF-TOKEN=e57b75a2-54cf-4a4c-8912-9f34199756ab; cookie2=163797163c1e10c8a5a3d8a1fe8da407; _tb_token_=78dd9b57bee33; _samesite_flag_=true; xman_t=/liCY534kwEHfXXQHcBBn/dXGO2kXjmZhdO4cMeq0QR7jLITFwNNKQUDE7bl8n/4SfC2oaOjJlMq0oBqyjCGghKCrdys4HZW0wVlqRUg1Aw=; xman_us_f=x_locale=en_US&x_l=1; intl_common_forever=tmzlFSuk44ZY3lJhfM1ClEwNvgKHpG5IZ7uIOeU3Fy++kE9jDiY4vA==; _csrf_token=1633927353549; xlly_s=1; _ga_RVSKK1KF5N=GS1.1.1634016188.6.0.1634016215.0; isg=BC8v8h6KksMWj5bGODYuu_-evkM51IP2EjB1ekG8yx6lkE-SSaQTRi3BFo6u6Ftu; tfstk=cSZGBIbmJPu65W7E2Gi_d-KpOMjRamKqsmoYYuV6P66x4ErKQs2p8U76KpcPKMYf.; l=eBx88p_cguE_tyMZBOfwourza77OSIRAguPzaNbMiOCP9XCB5xxcW6E78R86C3Gdhs3vR3z4bbs0BeYBq7F-nxvTuD0e8ekmn; _m_h5_tk=387a677bb0b76768d16872d19c8b90cb_1634043136036; _m_h5_tk_enc=1a063cf8a4fc69e6719184d185eecbfe; ali_apache_track=""; ali_apache_tracktmp=""; xman_f=FnnH50S/HQqR/b0CSp8oJPrWEvKX656JOB1/JOW+CnOCIB9QLhQEoyd5+HafrOWHCmHQc5Sc9OSZijlw5CdSm6aGtFSn+2EAZWeeE++kUxUBIBwyn5MWPQ==; sc_g_cfg_f=sc_b_locale=en_US&sc_b_site=CN&sc_b_currency=CNY',
        }
    })
    let obj = bufferToObject(res);
    console.log(obj)
}
test2()



