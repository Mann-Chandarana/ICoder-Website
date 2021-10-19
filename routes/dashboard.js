const router = require('express').Router();
const authCheck = require('../utils/authcheck');

router.use(authCheck);

router.get('/', (req, res) => {
   res.status(202);
   res.render("dashboard", { title: 'Dashboard', user: req.user });
});

module.exports = router;