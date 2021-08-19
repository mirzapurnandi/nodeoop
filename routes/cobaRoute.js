var express = require('express');
var router = express.Router();

const Cobas = require('../controllers/cobaController');
const cobas = new Cobas();

router.get('/', cobas.getAllCustomers);
//router.get('/pivot', customers.pivotsatu, customers.pivotdua, customers.pivot)
//router.get('/testing', customers.testing)

module.exports = router;
