/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://nebula.kuaishou.com/rest/wd/encourage/unionTask/signIn/report?__NS_sig3=6b7b3c0c56e7178bba375f34333226e3c5057fc50599a4290ada2424222221201f3f&sigCatVer=1`;
const method = `GET`;
const headers = {
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded;charset=UTF-8`,
'Sec-Fetch-Site' : `same-origin`,
'Cache-Control' : `no-cache`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ksNebula/11.11.30.3344 ISLP/0 StatusHT/47 ISDM/0 TitleHT/44 NetType/WIFI ICFO/0 locale/zh-Hans CT/0 Yoda/2.12.5 ISLB/0 ISLM/0 WebViewType/WK BHT/102 AZPREFIX/az3`,
'Sec-Fetch-Mode' : `cors`,
'Cookie' : `__NSWJ=; apptype=2; appver=11.11.30.3344; bottom_navigation=1; browseType=3; c=a; cdidTag=7; cdid_tag=7; cl=0; client_key=63b2bdd7; countryCode=cn; country_code=cn; cs=false; darkMode=false; deviceBit=0; did=13BB61C0-8ED3-43C4-A3BC-930802E95B85; didTag=0; did_tag=0; egid=DFPAF9B6D38D2F59E8346C7D06505C67F9ECC2CC91E830D852E63DF33D54132B; foreign=0; ftt=; gid=; global_id=DFPFFEE7FA856E63269524EB61A74710E3C18D8A5DB7DD6682CA7BF7AE8D74FB; grant_browse_type=AUTHORIZED; isp=CMCC; kpf=IPHONE; kpn=NEBULA; kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAHTGSJPCw8W5J9CNtnJdm4kxlfjbLz1AA16p5q75l8-6_JN7WXQ3EZdWl-hMrozMGWdjzAh2SqtulIfnQz0jEvOLUPsD0KxNlLyoTmLLPOCzqqPH_xHSqPHEQO42DzpX2-anpeabZqVif-0ZdFptQvV9BsdYKgxcaS8JfKF-4VX5nnzzik8YFsmcLu0sMnFojKuR-FhNdySAEzFgJE9fJp5GhLgtQndTL9KcIMccEKwrUv06E4iIIobG0uKAWyqhD8NPkAMBc1MF7zbegXPDpkVBysx1WZPKAUwAQ; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKgAYWbZLLLp59WQ7XBBKGfTsqjLkxXwee0b7tLyqMC-CdZENPfF-2liO7E1m5jekflo2YSE1zsoBSAUVsIJBhQBHuhEHzodDN0TewiQZuYxwW3DZRfpFDpMEiNAYr9Bb5jH3TeDQhTqD_8hjFy6r_eFhywPXiuCRXJq4RuDRwRQlXajmGvgVKHZT6hV7q5Mb6mgKIcVrVJ_TNGu0yLmAPjclsaErEJA26FToVlAmaCbr6l_rMcGiIglfhy4PdKr8TDPrdbS-V9kpMQfoFFHxWrEkpRzHXNeVooBTAB; kuaishou.sixin.login_st=ChdrdWFpc2hvdS5zaXhpbi5sb2dpbi5zdBKgAUBc95ThSbsDs9Q-oKAQ5TAM9-XMo1wdl6DrUQvsTdAqwOvMxIMJ5fEMqoh_5N5ecP7rdKNCQZGZge44k7-ZWzRtHwVG660xlfpfZwdZGOnV4t_e-ZuOFMXQAyR-22KPlF1DNxQmEyCKBXVXruKNoVzo0-coh7Z8MUIo2YUVkEJEK5p0VvHM4iAFNCllrJqf4KYv7dJUVhiheepjK971qQoaElCFD4yoG0dNrMrGMgWk18ADhiIgyRRUkt2mlGn1a77DyBF1gv4KYlKKukhaCp7u1IFdAh8oBTAB; language=zh-Hans-CN%3Bq%3D1%2C%20en-CN%3Bq%3D0.9; lat=; lkvr=; ll=; ll_client_time=0; lon=; mcc=46000; mod=iPhone14%2C5; net=WIFI; oDid=13BB61C0-8ED3-43C4-A3BC-930802E95B85; odid=13BB61C0-8ED3-43C4-A3BC-930802E95B85; os=17.0; pUid=qgwM3K4F8tP5FC3tLzpaJs0gR7zd4PA074611184b3c7871; power_mode=0; randomDid=13BB61C0-8ED3-43C4-A3BC-930802E95B85; rdid=13BB61C0-8ED3-43C4-A3BC-930802E95B85; session_id=1CBF38A9-268A-4BAF-B136-280147B41E58; sh=2532; sid=1CBF38A9-268A-4BAF-B136-280147B41E58; sw=1170; sys=iOS_17.0; thermal=10000; token=Cg9rdWFpc2hvdS5hcGkuc3QSoAHTGSJPCw8W5J9CNtnJdm4kxlfjbLz1AA16p5q75l8-6_JN7WXQ3EZdWl-hMrozMGWdjzAh2SqtulIfnQz0jEvOLUPsD0KxNlLyoTmLLPOCzqqPH_xHSqPHEQO42DzpX2-anpeabZqVif-0ZdFptQvV9BsdYKgxcaS8JfKF-4VX5nnzzik8YFsmcLu0sMnFojKuR-FhNdySAEzFgJE9fJp5GhLgtQndTL9KcIMccEKwrUv06E4iIIobG0uKAWyqhD8NPkAMBc1MF7zbegXPDpkVBysx1WZPKAUwAQ; uQaTag=0%2333333333330000000000; ud=3757697859; urlencode_mod=iPhone14%252C5; userId=3757697859; userRecoBit=0; ver=11.11; videoModelCrowdTag=1_5; weblogger_switch=`,
'Host' : `nebula.kuaishou.com`,
'Referer' : `https://nebula.kuaishou.com/nebula/task/earning?source=timer&layoutType=4&hyId=nebula_earning`,
'Pragma' : `no-cache`,
'Accept' : `*/*`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
