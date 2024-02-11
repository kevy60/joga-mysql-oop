const articleDbModel = require('../models/article')
const articleModel = new articleDbModel();

class articleController {
    constructor() {
        const articles = []
    }

    async getALLArticles(req, res){
        const articles = await articleModel.findAll()
        res.status(201).json({articles: articles})
    }

    async getArticleBySlug(req, res){
        const articles = await articleModel.findOne(req.params.slug)
        res.status(201).json({article: article})
    }
}

module.exports = articleController