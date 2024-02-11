const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');


const articleController = new articleControllerClass()

router.get('/', (req, res) => articleController.getALLArtticles(req, res));


module.exports = router;