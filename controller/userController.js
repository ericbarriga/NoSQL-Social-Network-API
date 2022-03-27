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
            console.log(newUser)
            res.json(newUser)
        } catch (error) {
            res.json({ error })
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            // console.log(users)
            res.json(users)
        } catch (error) {
            res.json(error)
        }
    },
    //////
    getUserById: async (req, res) => {
        const { userID } = req.params;
        try {
            // does the user id have to match the userID in the route???
            const user = await User.findById(userID)
            // console.log(userID);
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    },

    deleteUserById: async (req, res) => {
        const { userID } = req.params;
        try {
            const deleteUserById = await User.findByIdAndDelete(userID);
            res.json(deleteUserById)
        } catch (error) {
            res.json(error)
        }
    },

    updateUserById: async (req, res) => {
        const { userID } = req.params;
        try {
            const updateUserById = await User.findByIdAndUpdate(
                userID,
                { ...req.body },
                // you are adding this because in mongo db returns the old
                // id so you have to set it to return the one you updated 
                {
                    new: true,
                    // mongo does'nt add validators when you set to true 
                    // so you have to re enter them here 
                    runValidators: true,
                },
            )
            res.json(updateUserById)
        } catch (error) {
            res.json(error)
        }
    },
}