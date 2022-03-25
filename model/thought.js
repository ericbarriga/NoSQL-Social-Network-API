const { Schema, model } = require('mongoose');
const moment = require('moment');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAt) =>
            moment(createdAt).format('mm dd yyyy'),
    },

    username: {
        type: String,
        required: true,
    },

    reactions: [reactionSchema],
    ///
    toJSON: {
        virtual: true,
        getters: true
    },
},
    {
        toJSON: {
            virtual: true,
            getters: true,
        }
    },
)

const reactionSchema = new Schema({
    text: {
        type: String,
        completed: false,
    }
})

// virtual for replies 
reactionSchema.virtual('replies').get(function () {
    return this.replies.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;