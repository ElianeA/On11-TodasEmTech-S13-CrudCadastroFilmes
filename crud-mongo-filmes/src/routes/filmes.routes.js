const express = require('express')
const router = express.Router()
const controller = require('../controllers/filmesControlers')

const Filme = require('../models/filme')

router.post('/', controller.createFilme)

router.get('/', controller.listFilmes)

router.get('/:id', controller.listOneFilme)

router.patch('/:id', controller.updateFilme)

router.delete('/:id', controller.deleteFilme)

module.exports = router