const router = require('express').Router();
const cubeManager = require('../managers/cubeManagers');
// Path - /cubes/create
router.get('/create', (req, res) => {


    res.render('create')
});

router.post('/create', (req, res) => {
    const { 
        name,
        description,
        imgUrl,
        difficultyLevel,
    } = req.body;

    cubeManager.create({
        name,
        description,
        imgUrl,
        difficultyLevel: Number(difficultyLevel),
    });

    res.redirect('/');
});

module.exports = router;
