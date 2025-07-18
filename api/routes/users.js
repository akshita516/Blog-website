const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Post = require("../models/Post");


//UPDATE USER
router.put("/:id", async (req, res) => {

    console.log("userId from body:", req.body.userId);
    console.log("userId from params:", req.params.id);
    console.log("Type of body userId:", typeof req.body.userId);
    console.log("Type of params id:", typeof req.params.id);

    if (req.body.userId === req.params.id) {
        const user = await User.findById(req.params.id);
        if(user){
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    req.params.id,
                    { $set: req.body },
                    { new: true }
            );
                res.status(200).json(updatedUser);
            } catch (err) {
                console.error("Error updating user:", err);
                res.status(500).json({ message: "Server error while updating user." });
            }
        } else {
            console.log(req.body.userId);
            console.log(req.params.id);
            res.status(403).json({ message: "You can only update your own account!" });
        }
    }else{
        res.status(403).json("User not found or you are not authorized to update this user!");
    }
});

//DELETE USER
router.delete("/:id", async (req, res) => {

    console.log("userId from body in delete:", req.body.userId);
    console.log("userId from params in delete:", req.params.id);
    console.log("Type of body userId in delete:", typeof req.body.userId);
    console.log("Type of params id in delete:", typeof req.params.id);

    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            if(!user){
                return res.status(404).json({ message: "User not found." });
            }
            try {
                await Post.deleteMany({username: user.username});
                const deletedUser = await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted successfully.");
            } catch (err) {
                console.error("Error deleting user:", err);
                res.status(500).json({ message: "Server error while deleting user." });
            }
        } catch(err) {
            res.status(500).json(err);
        }
    }else{
            console.log(req.body.userId);
            console.log(req.params.id);
            res.status(403).json({ message: "You can only delete your own account!" });
    }
});

//GET USER
router.get("/:id", async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json("user not found");
        }
        const {password, ...others}=user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;
