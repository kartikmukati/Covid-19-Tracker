const express = require('express')
const router = express.Router()
const adminController = require('../controller/adminC')

router.post('/post-state',adminController.postState)

router.post('/post-country',adminController.getCountry)

router.get('/globaldata',adminController.globalData)

router.get('/statewise',adminController.stateWise)

router.get('/covid-19',adminController.covid19)

router.get('/aboutus',adminController.aboutUs)

router.get('/',adminController.getIndex)



module.exports = router