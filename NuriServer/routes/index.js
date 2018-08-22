const express = require('express');
const router = express.Router();
const apiRouter = require('./api/index');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


//router.use('/api', apiRouter);
router.use('/api', apiRouter);


module.exports = router;