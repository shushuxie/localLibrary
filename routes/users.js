var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**添加/users/cool路由 */
router.get('/cool',function(req,res,next) {
  res.send("你好cool");
})

module.exports = router;
