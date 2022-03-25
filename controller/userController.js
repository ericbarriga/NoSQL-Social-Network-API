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
}