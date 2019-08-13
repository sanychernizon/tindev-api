const axios = require('axios');
const Dev = require('../models/DevModel')

module.exports = {
  async store(req, res){
    const { user } = req.body;

    const userExists = await Dev.findOne({user:user})
    if(userExists){
      return res.json(userExists)
    }

    const response = await axios.get(`https://api.github.com/users/${user}`);
    const { name, login, avatar_url, bio } = response.data;

    if(name === null) {
      const dev = await Dev.create({
        name: login,
        user: login,
        bio,
        avatar: avatar_url
      })
      return res.json(dev)
    }

    const dev = await Dev.create({
      name,
      user: login,
      bio,
      avatar: avatar_url
    })
    
    res.json(dev)
  }
}