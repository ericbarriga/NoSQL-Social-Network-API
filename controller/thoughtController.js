const { Thought, User } = require('../model');

module.export = {
    createThought: async (req, res) => {
        const {
            thoughtText,
            username,
            userId,
        } = req.body;
        try {
            const newThought = await Thought.create({
                thoughtText,
                username,
                userId,
            })
            res.json(newThought);
        } catch (error) {
            res.json({ error })
        }
    }
}