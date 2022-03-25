const router = require('express').Router();

const {
    createThought
} = require('../../../controller/thoughtController')

router.route('/')
    .post(createThought)


module.exports = router