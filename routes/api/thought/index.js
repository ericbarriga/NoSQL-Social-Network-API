const router = require('express').Router();

const {
    createThought,
    getAllThots,
    getThotsById,
    updateThoughtById,
    deleteThoughtById,
} = require('../../../controller/thoughtController')

router.route('/')
    .post(createThought)
    .get(getAllThots)

router.route('/:thoughtId')
    .get(getThotsById)
    .put(updateThoughtById)
    .delete(deleteThoughtById)



module.exports = router