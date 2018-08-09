module.exports = {
  read: async (req, res) => {
    try {
      let db = req.app.get('db')
      let posts = await db.getPosts()
      res.send(posts)
    } catch(error) {
      console.log('error in postsCtrl.read', error)
      res.status(500).send(error)
    }
  },
  create: async (req, res) => {
    try {
      let db = req.app.get('db')
      let {title, content} = req.body
      let user_id = req.session.user ? req.session.user.id : 1

      let newPost = {user_id, title, content}
      let posts = await db.createPost(newPost)
      res.send(posts[0])
    } catch(error) {
      console.log('error in postsCtrl.create', error)
      res.status(500).send(error)
    }
  }
}