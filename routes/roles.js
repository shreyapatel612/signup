var express = require('express');
var router = express.Router();
var roleModel = require('../models/Role');
const mongoose = require('mongoose');
const roleController = require("../controllers/roles");


router.post('/insert',roleController.insert);

router.get('/',function(res,res){
    roleModel.find({},function(err,data){
        res.send({status : 'success',data :data});
    })
});
router.delete('/delete/:id',roleController.delete);

module.exports = router;