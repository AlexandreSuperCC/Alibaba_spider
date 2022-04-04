/**
 * Converts a Buffer into an Object.
 */

//文献参考 https://blog.csdn.net/iteye_8264/article/details/82653917
function bufferToObject(buffer){
    //buffer转换为字符串
    let json = JSON.stringify(buffer)
    let copy = Buffer.from(JSON.parse(json))//用于创建包含指定字符串，数组或缓冲区的新缓冲区
    let resStr = copy.toString();//变成了一个json字符串

    //字符串转换为对象
    let index = resStr.indexOf('(')
    let resStrReg = resStr.substring(index+1,resStr.length-2)
    let resObj = JSON.parse(resStrReg)
    return resObj;
}

/**
 * ES6标准发布后，module成为标准，标准使用是以export指令导出接口，以import引入模块，
 * 但是在我们一贯的node模块中，我们依然采用的是CommonJS规范，使用require引入模块，使用module.exports导出接口 
 */


/**
 * delay milleSecondes
 */
function lcWait(milleSecondes){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('executed delay function, delay: '+milleSecondes)
        },milleSecondes)
    })
}


module.exports = {bufferToObject,lcWait};