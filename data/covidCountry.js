const request = require('request')
const covidCountry = (country,callback) =>{
    const url = 'https://covid19.mathdro.id/api/countries/'+country
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback(1,undefined) 
        }
        else if(response.body.error){
            callback(2,undefined)
        }
        else{
            callback(undefined,{
            confirmed : response.body.confirmed.value,
            recovered : response.body.recovered.value,
            deaths : response.body.deaths.value
        })      
    }
})
}

module.exports = covidCountry