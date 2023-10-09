const { SuperHero } = require('../models');

// Create SuperHero
module.exports.createSuperHero = async (req, res,next) => {
    try{
        const {body} = req;
        const createSuperHero = await SuperHero.create(body);
        return res.status(201).send(createSuperHero);
    } catch (error) {
        next(error);
    }
}

// Delete One by id
module.exports.deleteById = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const rowsCount = await SuperHero.destroy({
            where: {
                id: id
            }
        });

        if(rowsCount > 0) {
            return res.status(200).send('Delete');
        } else {
            return res.status(204);
        }
    } catch (error) {
        next(error);
    }
}

//Find all heroes
module.exports.findAll = async (req, res, next) => {
    try {
        const { pagination } = req;
        const allHeroes = await SuperHero.findAll({
            ...pagination
        });
        return res.status(200).send(allHeroes);
    } catch (error) {
        next(error);
    }
}

//Find one by id
module.exports.findOneById = async (req, res, next) => {
    try {
        const { heroInstance } = req;
        return res.status(200).send(heroInstance);
    } catch (error) {
        next(error);
    }
}

//Update one by id
module.exports.updateById = async (req, res, next) => {
    try {
        const { heroInstance, body } = req;
        const result = await heroInstance.update(body);
        return res.status(200).send(result);
    } catch (error) {
        next(error);
    }
}