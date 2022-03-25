const { isEmail } = require('validator')

const { User, Thought } = require('../model')


module.exports = {
    createUser: async (req, res) => {
        const { username, email } = req.body
        if (!isEmail(email)) {
            return res.status(401).json({ errors: 'must have valid email' })
        }
        try {
            const newUser = await User.create({
                username,
                email,
            })
            res.json(newUser)
        } catch (error) {
            res.json({ error })
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users)
        } catch (error) {
            res.json(error)
        }
    },

    getUserById: async (req, res) => {
        const { userId } = req.params;
        try {
            const user = await User.findById(userId, '-email')
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    },
}