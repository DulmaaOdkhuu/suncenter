const { Router } = require('express');
const InfoTable = require('../info/table');

const router = new Router();


router.get('/all', (req, res, next)=> {

    console.log("orloo ")
    InfoTable.getInfos()
    .then(info => res.json( info ))
    .catch(error => next(error)) 
});
router.post('/register', (req, res, next)=> {
       console.log(req.body)
    //city=1  => Ulaanbaatar hot;
    //city=0  => Aimag 
    const {last_name , first_name, birthdate, gender, email, phone_number, city, province_district,address} = req.body
    InfoTable.PostInfo(last_name , first_name, birthdate, gender, email, phone_number, city, province_district,address)
    .then(register => res.send ("success"))
    .catch(error=>res.send("fail"))
});

router.get('/register', (req, res, next)=> {

    console.log("got it! ")
    InfoTable.getRegister()
    .then(register => res.send (register))
    .catch(error=>res.send("fail"))


    .then(register => res.json( register ))
    .catch(error => next(error)) 
});

module.exports = router;