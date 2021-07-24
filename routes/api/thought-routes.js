const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
//    createReaction,
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/<thoughtId>
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/<thoughtId>/<reactionId>
router.route('/:id/:reactionId')
    .delete(removeReaction);

// router.route('/:id/:reactionId')
//     .post(createReaction);

module.exports = router;
