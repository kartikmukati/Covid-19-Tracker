const request = require('request')

const covidWorld = (callback) =>{
    const url = 'https://covid19.mathdro.id/api'
    request( {url:url , json:true },(error,response) => {
        if(error){
            callback(1,undefined) 
        }
        else if(response.body.error){
            callback(2,undefined)
        }
        else{
            callback(undefined,{
                confirmed:response.body.confirmed.value,
                recovered:response.body.recovered.value,
                death:response.body.deaths.value,
                lastUpdate:response.body.lastUpdate,
                })
        }
    }) 
}
module.exports = covidWorld