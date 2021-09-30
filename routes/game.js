const express = require('express');
const router = express.Router();
const Game = require('../models/Game')

router.post('/', async (req, res) => {
    const { name, players, challenges, previousHolesLog} = req.body;
    try {
        const newGame = new Game({
            name,
            players,
            challenges,
            previousHolesLog
        });
        const game1 = await newGame.save();
        res.json(game1)
    } catch (err) {
        console.log(err.message)
    }
});

module.exports = router;