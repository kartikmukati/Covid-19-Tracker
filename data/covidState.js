const request = require('request')

const covidState = (state,callback) =>{
    const url = 'https://api.covid19india.org/state_district_wise.json'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback(1,undefined) 
        }
        else{
            const districtData = response.body[state]
            callback(undefined,districtData)
        }
    })
}

module.exports = covidState