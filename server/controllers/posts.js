import PostMessage from '../Model/postMessage.js';
export const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find();
        res.status(200).send(posts);
    } catch (error) {
        res.status(404).send({message:error.message});
    }
}

export const createPosts = async (req, res) => {
    const post= req.body;
    try {
        const new_post = new PostMessage(post);
        await new_post.save();
    } catch (error) {
        res.status(409).send({message:error.message});
    }
}