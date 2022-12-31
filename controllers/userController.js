const User = require('../models/User');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select('-__v');
      !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateSingleUser(req, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true });
      !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteSingleUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });
      !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addSingeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true });
      !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteSingleFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true });
      !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
