const { Router } = require("express");

const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
} = require("../../controllers/api/users");

const {
  createNewFriend,
  deleteFriend,
} = require("../../controllers/api/friends");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createNewUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);
router.post("/:userId/friend/:friendId", createNewFriend);
router.delete("/:userId/friend/:friendId", deleteFriend);

module.exports = router;
