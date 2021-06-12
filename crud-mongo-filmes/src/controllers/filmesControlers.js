const Filme = require('../models/filme')

const createFilme = async(req, res) => {
    const filme = new Filme({
        title: req.body.title,
        direction: req.body.direction,
        duration: req.body.duration,
        genre: req.body.genre,
        language: req.body.language,
        createdAt: req.body.createdAt
    })
    try {
        const novoFilme = await filme.save()
        res.status(201).json(novoFilme)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

const listFilmes = async(req, res) => {
    const filmes = await Filme.find()
    res.status(200).json(filmes)
}

const listOneFilme = async(req, res) => {
    const filme = await Filme.findById(req.params.id)
    if (filme == null) {
        return res.status(404).json({ message: "Filme não encontrao!" })
    }
    res.status(200).json(filme)
}

const updateFilme = async(req, res) => {
    try {
        const filme = await Filme.findById(req.params.id)
        if (filme == null) {
            return res.status(404).json({ message: 'Filme não encontrado' })
        }
        if (req.body.title != null) {
            filme.title = req.body.title
        }
        if (req.body.direction != null) {
            filme.direction = req.body.direction
        }
        if (req.body.duration != null) {
            filme.duration = req.body.duration
        }
        if (req.body.genre != null) {
            filme.genre = req.body.genre
        }
        if (req.body.language != null) {
            filme.language = req.body.language
        }
        if (req.body.createdAt != null) {
            filme.createdAt = req.body.createdAt
        }
        const filmeAtualizado = await filme.save()
        res.json(filmeAtualizado)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const deleteFilme = async(req, res) => {
    try {
        const filme = await Filme.findById(req.params.id)
        if (filme == null) {
            return res.status(404).json({ message: 'Filme não encontrado' })
        }
        await filme.remove()
        res.json({ message: "Filme deletado com sucesso!" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = {
    createFilme,
    listFilmes,
    updateFilme,
    deleteFilme,
    listOneFilme
}