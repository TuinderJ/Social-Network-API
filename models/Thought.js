const { Schema, model } = require('mongoose');
const dayjs = require('dayjs');
const reactionSchema = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    // TODO: make date auto format on query
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    methods: {
      getFormatedDate() {
        return this.createdAt;
      },
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

thoughtSchema.virtual('formatedDate').get(function () {
  return dayjs(this.createdAt).format('MM/DD/YY');
});

// Initialize our Video model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
