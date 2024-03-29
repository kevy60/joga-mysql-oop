const express = require('express');
const router = express.Router();
const articleControllerClass = require('../controllers/article');


const articleController = new articleControllerClass()

router.get('/', (req, res) => articleController.getALLArticles(req, res));
router.get('/article/:slug', (req, res) => articleController.getArticleBySlug(req, res));
router.post('/article/create', (req, res) => articleController.createNewArticle(req, res));
router.delete('/delete/:id', (req, res) => articleController.deleteArticle(req, res));

module.exports = router;