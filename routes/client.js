const express = require('express');
const router = express.Router();
const db = require('../config/database');
const client = require("../models/client");


router.get('/', (req, res) =>
    client.findAll()
        .then(client => {
            console.log(client)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
    );

module.exports = router;
