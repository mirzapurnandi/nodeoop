var express = require('express');
var router = express.Router();

const Customers = require('../controllers/customers');
const customers = new Customers();

router.get('/', customers.list);
//router.get('/pivot', customers.pivotsatu, customers.pivotdua, customers.pivot)
//router.get('/testing', customers.testing)

module.exports = router;
