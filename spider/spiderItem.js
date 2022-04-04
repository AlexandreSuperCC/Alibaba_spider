let puppeteer = require('puppeteer');
const {sqlQuery,closeCon} = require('../utils/lcMysql');

const urlsite = 'https://www.alibaba.com/Consumer-Electronics_p44?spm=a27aq.13929330.scGlobalHomeHeader.399.25283cad8UqiDQ';
const testUrl = 'https://www.alibaba.com/consumer-electronics/mobile-phone-accessories/p44_p100001205';

const debugOptions = {
    defaultViewport:{
        width:1400,
        height:800,
        slowMo:250
    },
    headless:false,
    timeout:0
}
const provideOptions = {
    headless:true,
    timeout:0
}
function lcWait(milleSecondes){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("成功执行延迟函数, 延迟: "+milleSecondes)
        }, milleSecondes)
    })
}


async function updateItem(itemObj){
    arr = [itemObj.id,itemObj.cid,itemObj.name,itemObj.price,itemObj.moq,itemObj.url,itemObj.imgurl];
    itemSql = 'replace into t_electronic(id,cid,name,price,moq,url,imgurl) values(?,?,?,?,?,?,?);';
    await sqlQuery(itemSql,arr)
}

async function getAllGoods(cid,urlCategory,config){
    let brouser = await puppeteer.launch(config);
    let page = await brouser.newPage();
    await page.setRequestInterception(true);
    page.on('request', interceptedRequest=>{
        let urlObj = new URL(interceptedRequest.url())
        if(urlObj.hostname == 'googleads.g.doubleclick.net'){
            interceptedRequest.abort()
        }
        else{
            interceptedRequest.continue();
        }
    })
    await page.goto(urlCategory,{
        timeout:0,
        waitUntil: [
            'load',                       //等待 “load” 事件触发
            //'domcontentloaded',  //等待 “domcontentloaded” 事件触发
            'networkidle0',          //在 500ms 内没有任何网络连接
        ]
    })
    //下拉三次
    // await lcWait(1000).then(async ()=>{
    //     await page.evaluate(()=>{
    //         window.scrollTo(100,99999)
    //     })
    // })
    await page.evaluate(()=>{
        window.scrollTo(100,99999)
    })
    await page.waitForTimeout(1000);
    await page.evaluate(()=>{
        window.scrollTo(100,99999)
    })
    await page.waitForTimeout(1000);
    await page.evaluate(()=>{
        window.scrollTo(100,99999)
    })

    //await page.waitForNavigation({timeout:0 })//only used after reload or click!!!
    let goodsArr = await page.$$eval('.flexColFloor.flex5ColFloor',(res,cid)=>{
        let objItem = [];
        res.forEach((item)=>{
            // console.log(item)
            let reg = /@@productId:(.*?)&productId=/igs

            let obj = {
                id:reg.exec(item.querySelector('a').getAttribute('data-params'))[1],
                cid:cid,
                name:item.querySelector('a').getAttribute('title'),
                price:item.querySelector('div > a > div > div:nth-child(2) > div:nth-child(2) > span').innerText,
                moq:item.querySelector('div > a > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > span').innerText,
                url:item.querySelector('a').getAttribute('href'),
                imgurl:'https:'+item.querySelector('img').getAttribute('src'),
            }
            objItem.push(obj)
        })
        return objItem;
    },cid)//注意这里传参数的时候cid两边都要写！！！！！！！
    //  console.log(goodsArr)
    goodsArr.forEach((item)=>updateItem(item));


    await page.waitForTimeout(3000);
    await brouser.close();

}

//getAllGoods(1,testUrl,debugOptions)
module.exports = {getAllGoods}
