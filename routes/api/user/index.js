const router = require('express').Router();

const {
    createUser,
    getAllUsers,
    getUserById,
} = require('../../../controller/userController')

router.route('/')
    .get(getAllUsers)
    .post(createUser);


router.route('/:userID')
    .get(getUserById)

module.exports = router