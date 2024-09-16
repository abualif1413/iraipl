var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login-attempt', async function (req, res, _next) {
    res.json({
        success: true,
        metadata: {
            ...req.body,
        },
    });
    res.end();
});

module.exports = router;
