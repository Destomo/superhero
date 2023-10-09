const { Router } = require('express');
const SuperHeroRouter = require('./SuperHeroRouter');

const router = Router();

router.use('./superHeroes', SuperHeroRouter);

module.exports = router;