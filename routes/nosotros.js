var express = require('express');
var router = express.Router();

// router.get('/', function(req,res,next){
//     res.send('hola soy la pagina de nosotros pero esta controlada desde el controlador nosotros.js');
// })

router.get('/', function(req,res,next){
    res.render('nosotros'); //view/nosotros.hbs
})


module.exports = router;