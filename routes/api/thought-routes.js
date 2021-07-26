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

// /api/thoughts/thoughtId
router
    .route('/:userId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactionId
router.
    route('/:id/reactions')
    .delete(removeReaction)
    .post(addReaction);

module.exports = router;
