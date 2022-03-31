var express = require('express');
var router = express.Router();

var customersRouter = require('./customerRoute');
var cobaRouter = require('./cobaRoute');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/customers', customersRouter);
router.use('/coba', cobaRouter)

module.exports = router;
