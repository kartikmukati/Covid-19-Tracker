const covidWorld = require('../data/covidWorld')
const covidCountry = require('../data/covidCountry')
const covidWorldAll = require('../data/covidWorldAll')
const covidState = require('../data/covidState')
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
exports.getIndex = (( req, res) => {
        covidWorld((error,data) =>{
        if(error == 1)
        res.render('404')
        else if(error == 2)
        res.render('503')
        else{
            const confirmed = formatNumber(data.confirmed)
            const recovered = formatNumber(data.recovered)
            const deaths = formatNumber(data.death)
            const date = new Date(data.lastUpdate).toDateString()
            const time = new Date(data.lastUpdate).toLocaleTimeString()
            res.render('index',{
                confirmed: confirmed,
                recovered:recovered,
                death:deaths,
                lastUpdate:date,
                time:time,
                confirmedG:data.confirmed,
                recoveredG:data.recovered,
                deathG:data.death
            
            })
        }
    })  
})

exports.globalData = ((req,res) =>{
    covidWorldAll((error,data) => {
        if(error == 1)
        res.render('404')
        else if(error == 2)
        res.render('503')
        else{
            res.render('globaldata',{
            worldData:data
            })
        }
    })
})

exports.getCountry = (req,res,next)=>{
    const country = req.body.country
    covidCountry(country,(error,callback) => {
        if(error == 1)
        res.render('404')
        else if(error == 2)
        res.render('503')
        else{
            const recoverP = (callback.recovered/callback.confirmed)*100
            const recoveredP = recoverP.toFixed(2)
            const deathsP = (callback.deaths/callback.confirmed)*100
            const deathP = deathsP.toFixed(2)
            const confirmed = formatNumber(callback.confirmed)
            const recovered = formatNumber(callback.recovered)
            const deaths = formatNumber(callback.deaths)
            
            res.render('getCountry',{
                countryName:country,
                confirmed:confirmed,
                recovered:recovered,
                deaths:deaths,
                recoveredP:recoveredP,
                deathP:deathP,
                confirmedG:callback.confirmed,
                recoveredG:callback.recovered,
                deathG:callback.deaths
            })
        }
        
    })
}

exports.stateWise = ( req, res, next )=>{
    res.render('statewise',{
        state:null,
        cities:null,
        length:0
    })
}

exports.covid19 = ( req, res, next) =>{
    res.render('covid19')
}

exports.postState = (req, res, next) =>{
    const state = req.body.state
    covidState(state,(error,callback) => {
        if(error == 1)
        res.render('404')
        else{
            const cityData = callback.districtData
            const length = Object.keys(cityData).length

            res.render('statewise',{
                state:state,
                cities:cityData,
                length:length
            })
        }
    }) 
}

exports.aboutUs = (req,res,next) =>{
    res.render('aboutus')
}