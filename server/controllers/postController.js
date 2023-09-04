/*const Posts = require('../models/Posts')

async function getAllPost(req, res) {
  try {
    const posts = await Posts.findAll();
    if (posts.length === 0) {
      return res.status(400).json({ error: 'keine Posts vorhanden' })
    }
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: 'an error occurrept while fetching data!' })
  }
}

async function getUserPosts(req, res) {
  try {
    const userId = req.body;
    const userPosts = Posts.findAll({
      where: { userId }
    })

    if (userPosts.length === 0) {
      return res.status(400).json({ error: 'noch keine Posts vorhanden!' })
    }
    return res.status(200).json(userPosts)
  } catch (error) {
    return res.status(500).json({ error: 'an error occurrept while fetching data!' })
  }
}

module.exports = { getAllPost, getUserPosts }

*/
