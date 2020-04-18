const request = require('request')

const covidWorldAll = (callback) =>{
    const url = 'https://corona.lmao.ninja/v2/countries'    
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback(1,undefined) 
        }
        else if(response.body.message){
            callback(2,undefined)
        }
        else{
            const data = response.body
            callback(undefined,data)
        }
    })
}

module.exports = covidWorldAll