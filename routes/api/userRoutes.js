const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateSingleUser, deleteSingleUser, addSingeFriend, deleteSingleFriend } = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateSingleUser).delete(deleteSingleUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addSingeFriend).delete(deleteSingleFriend);

module.exports = router;
