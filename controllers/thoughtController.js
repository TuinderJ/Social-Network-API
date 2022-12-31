const { Thought, User } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      !thought ? res.status(404).json({ message: 'No thought with that ID' }) : res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate({ _id: req.body.userId }, { $addToSet: { thoughts: thought._id } }, { new: true });
      !user ? res.status(404).json({ message: 'thought created, but found no user with that ID' }) : res.json('Created the thought 🎉');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true });
      !thought ? res.status(404).json({ message: 'No thought with this id!' }) : res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      } else {
        const user = await User.findOneAndUpdate({ thoughts: req.params.thoughtId }, { $pull: { thoughts: req.params.thoughtId } }, { new: true });
        !user ? res.status(404).json({ message: 'thought created but no user with this id!' }) : res.json({ message: 'thought successfully deleted!' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Add a thought reaction
  async addThoughtReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { runValidators: true, new: true });
      !thought ? res.status(404).json({ message: 'No thought with this id!' }) : res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove thought reaction
  async removeThoughtReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { runValidators: true, new: true });
      !thought ? res.status(404).json({ message: 'No thought with this id!' }) : res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
