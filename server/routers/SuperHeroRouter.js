const { Router } = require('express');
const HeroController = require('../controllers/Hero.controller');

const heroRouter = Router();

heroRouter.post('/', HeroController.createSuperHero);
heroRouter.post('/', HeroController.deleteById);
heroRouter.post('/', HeroController.findAll);
heroRouter.post('/', HeroController.findOneById);
heroRouter.post('/', HeroController.updateById);

module.exports = HeroController;