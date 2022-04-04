let mysql = require('mysql')

// let options = {
//     host:'localhost',
//     port:'3306',
//     user:'root',
//     password:'0423',
//     database:'amazon'
// }

let options = {
    host:'139.224.199.41',
    port:'3306',
    user:'root',
    password:'',
    database:'amazon'
}

let con = mysql.createConnection(options)

con.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connnect with success")
    }
})

function sqlQuery(strSql, arr){
    return new Promise((resolve, reject)=>{
        con.query(strSql, arr, (err, results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
     })
}

function closeCon(){
    con.end((err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('disconnect with success')
        }
    })
}

module.exports = {sqlQuery,closeCon}