const { Thought, User } = require('../model');



module.exports = {
    getAllThots: async (req, res) => {
        try {
            const thots = await Thought.find()
            res.json(thots)
        } catch (error) {
            res.json(error)
        }
    },

    getThotsById: async (req, res) => {
        const { thoughtId } = req.params
        try {
            const thots = await Thought.findById(thoughtId)
            res.json(thots)
        } catch (error) {
            res.json(error)
        }
    },

    createThought: async (req, res) => {
        const {
            thoughtText,
            username,
            userId
        } = req.body;
        try {
            const newThought = await Thought.create({
                thoughtText,
                username,
                userId,
            })
                .then(({ _id }) => {
                    return User.findOneAndUpdate(
                        { _id: userId },
                        { $push: { thoughts: _id } },
                        { new: true, runValidators: true }
                    );
                })
                .then((thoughtData) => {
                    //console.log(thoughtData._id);
                    res.json(thoughtData);
                });
        } catch (error) {
            console.log(error);
        }
    },

    updateThoughtById: async (req, res) => {
        const { thoughtId } = req.params;
        try {
            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                { ...req.body },
                {
                    new: true,
                    runValidators: true,
                }
            );
            res.json(updatedThought);
        } catch (error) {
            res.json(error);
        }
    },

    deleteThoughtById: async (req, res) => {
        const { thoughtId } = req.params;
        try {
            const deletedThought = await Thought.findByIdAndDelete(thoughtId);
            res.json(deletedThought);
        } catch (error) {
            res.json(error);
        }
    },


}
