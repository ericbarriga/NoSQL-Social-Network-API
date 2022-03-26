const router = require('express').Router();

const {
    getAllThots,
    getThotsById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
} = require('../../../controller/thoughtController')

router.route('/')
    .get(getAllThots)
    .post(createThought)

router.route('/thoughtId')
    .get(getThotsById)
    .put(updateThoughtById)
    .delete(deleteThoughtById)

module.exports = router