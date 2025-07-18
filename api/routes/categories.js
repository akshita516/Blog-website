const router = require("express").Router();
const Category = require("../models/Category");

// CREATE CATEGORY
router.post("/", async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (err) {
        res.status(500).json({ message: "Error creating category", error: err });
    }
});

// GET ALL CATEGORIES
router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving categories", error: err });
    }
});

module.exports = router;