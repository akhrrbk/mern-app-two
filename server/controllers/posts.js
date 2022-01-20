const PostMessage = require('../models/postMessage')

const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find({})
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
const createPost = async (req, res) => {
    const body = req.body
    
    const newPost = new PostMessage({
        title: body.title,
        message: body.message,
        creator: body.creator,
        tags: body.tags,
        selectedFile: body.selectedFile,
        likecount: body.likecount
    })
    
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
    
}
// const getApiPosts = (req, res) => {
//     res.send('different page for api to see if it is working')
// }

module.exports = {
    getPosts,
    createPost
}