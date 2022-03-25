const router = require('express').Router();

const {
    createUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById,
} = require('../../../controller/userController')

router.route('/')
    .get(getAllUsers)
    .post(createUser);


router.route('/:userID')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById)

module.exports = router