const express = require('express');
const router = express.Router();
// const router = require('express').Router();

const cubeManager = require('../managers/cubeManagers');

router.get('/', (req, res) => { 
    // console.log(req.query) -> shows { search: 'mirror', from: '1', to: '3' }

    const {search, from, to}  = req.query;

    const cubes = cubeManager.getAll(search, from, to);
    res.render('index', {cubes, search, from, to});
})

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404')
})

module.exports = router;