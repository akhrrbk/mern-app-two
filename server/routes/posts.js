const express = require('express')
const {getPosts, createPost} = require('../controllers/posts')

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)

// router.get('/api', getApiPosts)

module.exports = router